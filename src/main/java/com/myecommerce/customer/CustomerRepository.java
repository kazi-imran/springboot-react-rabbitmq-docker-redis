package com.myecommerce.customer;

import java.util.List;
import java.util.Optional;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(path = "/customers", excerptProjection = InlineAddress.class)
@RestResource
@CrossOrigin
public interface CustomerRepository extends PagingAndSortingRepository<Customer, Long> {

	// <1>
	Optional<Customer> findByEmailContaining(String email);

	List<Customer> findById(Long id);	
	
	@Override
	@CacheEvict(value = "customer", key = "#p0.id")
	<S extends Customer> S save(S entity);

	@Override
	@Cacheable(value = "customer", key = "#p0")
	Customer findOne(Long id);

	@Modifying
	@Query("delete from Customer t where t.id = ?1")
	@CacheEvict(value = "customer", key = "#p0")
	void delete(long id);

}
