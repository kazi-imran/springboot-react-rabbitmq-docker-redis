package com.myecommerce.address;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.myecommerce.customer.Customer;




@RepositoryRestResource(path = "/addresses")
@RestResource
public interface AddressRepository extends PagingAndSortingRepository<Address, Long> {

	List<Customer> findById(Long id);

}