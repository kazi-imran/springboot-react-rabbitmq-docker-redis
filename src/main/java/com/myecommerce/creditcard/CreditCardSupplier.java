package com.myecommerce.creditcard;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Random;
import java.util.Set;
import java.util.function.Supplier;
import java.util.stream.IntStream;

import net.andreinc.mockneat.MockNeat;
import net.andreinc.mockneat.types.enums.CreditCardType;

public class CreditCardSupplier implements Supplier<Set<CreditCard>> {

	@Override
	public Set<CreditCard> get() {
		Set<CreditCard> setOfCreditCards = new HashSet<>();
		Map<Integer, CreditCardType> creditCardFactory = new HashMap<>();
		creditCardFactory.put(1, CreditCardType.AMERICAN_EXPRESS);
		creditCardFactory.put(2, CreditCardType.MASTERCARD);
		creditCardFactory.put(3, CreditCardType.MAESTRO_19);
		creditCardFactory.put(4, CreditCardType.VISA_19);
		creditCardFactory.put(5, CreditCardType.VISA_16);
		MockNeat mockNeat = MockNeat.threadLocal();
		//int randomCreditCardType = new Random().nextInt(5 - 1 + 1) + 1;
		int randomNumberOfCreditCards = new Random().nextInt(3 - 1 + 1) + 1;
	
		
		IntStream.rangeClosed(1, randomNumberOfCreditCards).forEach(i ->
		{
			
		int randomCreditCardType = new Random().nextInt(5 - 1 + 1) + 1;
		String creditCardNumber = mockNeat.creditCards().type(creditCardFactory.get(randomCreditCardType)).val();
		CreditCard creditCard = new CreditCard(creditCardNumber, creditCardFactory.get(randomCreditCardType));
		setOfCreditCards.add(creditCard);
		}
		);
		return setOfCreditCards;
	}
}