package com.myecommerce.customer;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import java.lang.Long;
import com.myecommerce.customer.Customer;
import java.util.List;

@RepositoryRestResource(path = "/customers",excerptProjection = InlineAddress.class)
@RestResource
public interface CustomerRepository extends PagingAndSortingRepository<Customer, Long> {

	// <1>
	Optional<Customer> findByEmailContaining(String email);

	List<Customer> findById(Long id);

}
