package com.kiaziz.customer;

import java.util.Optional;
import java.util.function.Function;

import com.kiaziz.account.Account;
import com.kiaziz.address.Address;
import com.kiaziz.address.AddressType;
import com.kiaziz.creditcard.CreditCardSupplier;
import com.kiaziz.randomuserspapi.Location;
import com.kiaziz.randomuserspapi.Name;
import com.kiaziz.randomuserspapi.Picture;
import com.kiaziz.randomuserspapi.Result;

import net.andreinc.mockneat.unit.id.UUIDs;


public class FakeCustomerBuilder implements Function<Result, Account> {

	private final static CreditCardSupplier CREDIT_CARD_SUPPLIER = new CreditCardSupplier();

	@Override
	public Account apply(Result result) {

		Customer customer = new Customer();
		Account account = new Account(new UUIDs().supplier().get());
		Optional<Name> name = Optional.ofNullable(result.getName());
		Optional<Location> location = Optional.ofNullable(result.getLocation());
		Optional<Picture> picture = Optional.ofNullable(result.getPicture());
		
		account.setCreditCards(CREDIT_CARD_SUPPLIER.get());

		

		final Address address = new Address();
		location.ifPresent(l -> {

			address.setStreet1(location.get().getStreet());
			address.setCity(location.get().getCity());
			address.setState(location.get().getState());
			address.setCountry("DE");
			address.setZipCode(location.get().getPostcode());
			address.setAddressType(AddressType.SHIPPING);

		});
		final Address address1 = new Address();
		address1.setCity("Dhaka");
		address1.setAddressType(AddressType.BILLING);
		address1.setCountry("Bangladesh");
		address1.setState("Dhaka");
		address1.setStreet1("Shatmoshjod road");
		account.getAddresses().add(address);
		account.getAddresses().add(address1);
		
		
		

		name.ifPresent(n -> {
			customer.setFirstName(n.getFirst());
			customer.setLastName(n.getLast());
			customer.setEmail(result.getEmail());
			customer.setGender(result.getGender());

		});
		
		account.setCustomer(customer);
		
		picture.ifPresent(p->{
			customer.setLarge(p.getLarge());
			customer.setMedium(p.getMedium());
			customer.setThumbnail(p.getThumbnail());
			
		});

		return account;
	}

//	private void generateCreditCardData() {
//		Map<Integer, CreditCardType> creditCardFactory = new HashMap<>();
//		creditCardFactory.put(1, CreditCardType.AMERICAN_EXPRESS);
//		creditCardFactory.put(1, CreditCardType.MASTERCARD);
//		creditCardFactory.put(1, CreditCardType.MAESTRO_19);
//		creditCardFactory.put(1, CreditCardType.VISA_19);
//		creditCardFactory.put(1, CreditCardType.VISA_16);
//		MockNeat mockNeat = MockNeat.threadLocal();
//		int randNum = new Random().nextInt(5 - 1 + 1) + 1;
//		String creditCardNumber = mockNeat.creditCards().type(creditCardFactory.get(randNum)).val();
//		CreditCard creditCard = new CreditCard(creditCardNumber, creditCardFactory.get(randNum));
//
//	}

}
