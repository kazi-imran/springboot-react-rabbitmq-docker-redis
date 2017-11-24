package com.kiaziz.account;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.kiaziz.customer.Customer;




@RepositoryRestResource(path = "/accounts")
@RestResource
public interface AccountRepository extends PagingAndSortingRepository<Account, Long> {

	List<Account> findById(Long id);

}