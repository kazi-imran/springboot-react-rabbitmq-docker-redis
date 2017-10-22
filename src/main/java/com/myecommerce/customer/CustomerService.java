package com.myecommerce.customer;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Stream;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.myecommerce.account.Account;
import com.myecommerce.account.AccountRepository;
import com.myecommerce.address.Address;
import com.myecommerce.address.AddressRepository;
import com.myecommerce.creditcard.CreditCard;
import com.myecommerce.creditcard.CreditCardRepository;
import com.myecommerce.randomuserspapi.RandomUsersApi;

@Service
public class CustomerService {
	private Log log = LogFactory.getLog(getClass());
	private static final FakeCustomerBuilder FAKE_CUSTOMER_BUILDER=new FakeCustomerBuilder();

	private String randomUserApi;
	private RestTemplate restTemplate;
	private CustomerRepository customerRepository;
	private AccountRepository accountRepository;
	private AddressRepository addressRepository;
	private CreditCardRepository creditCardRepository;

	public CustomerService(@Value("${randomusersapi.url}") final String randomUserApi, final RestTemplate restTemplate,
			final CustomerRepository customerRepository,final AccountRepository accountRepository,final AddressRepository addressRepository,
			final CreditCardRepository creditCardRepository) {
		this.randomUserApi = randomUserApi;
		this.restTemplate = restTemplate;
		this.customerRepository=customerRepository;
		this.addressRepository=addressRepository;
		this.creditCardRepository=creditCardRepository;
		this.accountRepository=accountRepository;
	}

	public void fetchUsersFromRandomUsersAPI(int numberOfUsers) {
		 ResponseEntity<RandomUsersApi> movieResponseEntity = this.restTemplate.getForEntity(
				 randomUserApi+"?results="+numberOfUsers, RandomUsersApi.class);
		 List<Account> accountList=new ArrayList<>();
		 movieResponseEntity.getBody().getResults().forEach(result->{
			 Account account = FAKE_CUSTOMER_BUILDER.apply(result);
			 accountList.add(account);
			 
		 });
		 
		 accountList.stream().forEach(account->{
			 Set<Address> addresses = account.getAddresses();
			 Set<CreditCard> creditCards = account.getCreditCards();	
			 account.setAddresses(null);
			 account.setCreditCards(null);
		
			 
			 Account savedAccount = accountRepository.save(account);
			 Customer customer = savedAccount.getCustomer();
			 customer.setAccount(savedAccount);
			 customerRepository.save(customer);
			 
			 System.out.println(savedAccount);
			 addresses.forEach(address->{
				 address.setAccount(savedAccount);
				 Address savedAddress = addressRepository.save(address);
				 System.out.println(savedAddress); 			 
				 if(null==savedAccount.getAddresses()){					 
					 Set<Address> setsOfAddresses=new HashSet<>();
					 setsOfAddresses.add(savedAddress);
					 savedAccount.setAddresses(setsOfAddresses);				 
				 }
				 else
				 {
					 savedAccount.getAddresses().add(savedAddress);
					 
				 }
			 });
			 Account savedAccountWithAddressInfo= accountRepository.save(savedAccount);
			System.out.println(savedAccountWithAddressInfo);
			 creditCards.forEach(creditCard->{
				 creditCard.setAccount(savedAccountWithAddressInfo);
				 CreditCard savedCreditCard = creditCardRepository.save(creditCard);
				 System.out.println(savedCreditCard);
				 
				 if(null==savedAccountWithAddressInfo.getCreditCards()){
					 Set<CreditCard> setsOfCreditCards=new HashSet<>();
					 setsOfCreditCards.add(savedCreditCard);
					 savedAccountWithAddressInfo.setCreditCards(setsOfCreditCards);				 
				 }
				 else
				 {
					 savedAccountWithAddressInfo.getCreditCards().add(savedCreditCard);
					 
				 }
				 Account savedAccountWithAddressInfoAndCreditCards= accountRepository.save(savedAccountWithAddressInfo);
				 System.out.println(savedAccountWithAddressInfoAndCreditCards);
				 
			 });
			 
		 });
		 
	}

}
