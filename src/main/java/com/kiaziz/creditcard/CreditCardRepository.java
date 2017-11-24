package com.kiaziz.creditcard;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.kiaziz.address.Address;
import com.kiaziz.customer.Customer;

public interface CreditCardRepository extends PagingAndSortingRepository<CreditCard, Long> {

	List<CreditCard> findById(Long id);

}
