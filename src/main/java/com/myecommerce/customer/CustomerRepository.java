package com.myecommerce.customer;

import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.lang.Long;
import com.myecommerce.customer.Customer;
import java.util.List;

@RepositoryRestResource(path = "/customers",excerptProjection = InlineAddress.class)
@RestResource
@CrossOrigin
public interface CustomerRepository extends PagingAndSortingRepository<Customer, Long> {

	// <1>
	Optional<Customer> findByEmailContaining(String email);

	List<Customer> findById(Long id);
	
	@Modifying
	@Query("delete from Customer t where t.id = ?1")
	void delete(long id);
	
	

}
