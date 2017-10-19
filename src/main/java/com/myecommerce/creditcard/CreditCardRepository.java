package com.myecommerce.creditcard;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.myecommerce.address.Address;
import com.myecommerce.customer.Customer;

public interface CreditCardRepository extends PagingAndSortingRepository<CreditCard, Long> {

	List<CreditCard> findById(Long id);

}
