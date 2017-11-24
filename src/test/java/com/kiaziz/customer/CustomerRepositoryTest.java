package com.kiaziz.customer;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.kiaziz.account.Account;
import com.kiaziz.account.AccountRepository;

import net.andreinc.mockneat.unit.id.UUIDs;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CustomerRepositoryTest
{
	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	private AccountRepository accountRepository;
	
	@Test
	public void testSaveACustomer()
	{
		Account account = new Account(new UUIDs().supplier().get());
		Customer customer= new Customer();
		customer.setFirstName("TestFirstname");
		customer.setLastName("TestSecondname");
		account.setCustomer(customer);
		Account savedAccount = accountRepository.save(account);		
		
		customer.setAccount(savedAccount);
		customerRepository.save(customer);
		assertThat(customerRepository.findAll()).isNotEmpty();
		
	}
}
