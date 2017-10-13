package com.myecommerce.customer;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.function.Function;

import com.myecommerce.account.Account;
import com.myecommerce.address.Address;
import com.myecommerce.address.AddressType;
import com.myecommerce.creditcard.CreditCard;
import com.myecommerce.creditcard.CreditCardSupplier;
import com.myecommerce.randomuserspapi.Location;
import com.myecommerce.randomuserspapi.Name;
import com.myecommerce.randomuserspapi.Result;

import net.andreinc.mockneat.MockNeat;
import net.andreinc.mockneat.types.enums.CreditCardType;
import net.andreinc.mockneat.unit.id.UUIDs;


public class FakeCustomerBuilder implements Function<Result, Customer> {

	private final static CreditCardSupplier CREDIT_CARD_SUPPLIER = new CreditCardSupplier();

	@Override
	public Customer apply(Result result) {

		Customer customer = new Customer();
		Account account = new Account(new UUIDs().supplier().get());
		account.setCreditCards(CREDIT_CARD_SUPPLIER.get());

		Optional<Location> location = Optional.ofNullable(result.getLocation());

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

		Optional<Name> name = Optional.ofNullable(result.getName());

		name.ifPresent(n -> {
			customer.setFirstName(n.getFirst());
			customer.setLastName(n.getLast());
			customer.setEmail(result.getEmail());
			customer.setGender(result.getGender());

		});
		customer.setAccount(account);

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
