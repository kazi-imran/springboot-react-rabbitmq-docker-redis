package com.myecommerce.address;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.myecommerce.customer.Customer;




@RepositoryRestResource(path = "/addresses")
@RestResource
@CrossOrigin
public interface AddressRepository extends PagingAndSortingRepository<Address, Long> {

	List<Address> findById(Long id);

}