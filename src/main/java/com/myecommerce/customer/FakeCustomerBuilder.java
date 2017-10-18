package com.myecommerce.customer;

import java.util.Optional;
import java.util.function.Function;

import com.myecommerce.account.Account;
import com.myecommerce.address.Address;
import com.myecommerce.address.AddressType;
import com.myecommerce.creditcard.CreditCardSupplier;
import com.myecommerce.randomuserspapi.Location;
import com.myecommerce.randomuserspapi.Name;
import com.myecommerce.randomuserspapi.Picture;
import com.myecommerce.randomuserspapi.Result;

import net.andreinc.mockneat.unit.id.UUIDs;


public class FakeCustomerBuilder implements Function<Result, Customer> {

	private final static CreditCardSupplier CREDIT_CARD_SUPPLIER = new CreditCardSupplier();

	@Override
	public Customer apply(Result result) {

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

		account.getAddresses().add(address);	

		name.ifPresent(n -> {
			customer.setFirstName(n.getFirst());
			customer.setLastName(n.getLast());
			customer.setEmail(result.getEmail());
			customer.setGender(result.getGender());

		});
		customer.setAccount(account);
		
		picture.ifPresent(p->{
			customer.setLargePictureLink(p.getLarge());
			customer.setMediumPictureLink(p.getMedium());
			customer.setThumbnailLink(p.getThumbnail());
			
		});

		return customer;
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
