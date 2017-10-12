package com.myecommerce.customer;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(path = "/customers")
@RestResource
public interface CustomerRepository extends PagingAndSortingRepository<Customer, Long> {

// <1>
Optional<Customer> findByEmailContaining(String email);
}
