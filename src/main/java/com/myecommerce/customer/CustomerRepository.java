package com.myecommerce.customer;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface CustomerRepository extends
PagingAndSortingRepository<Customer, Long> {

// <1>
Optional<Customer> findByEmailContaining(String email);
}
