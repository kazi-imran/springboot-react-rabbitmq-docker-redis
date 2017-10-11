package com.myecommerce.customer;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.myecommerce.randomuserspapi.RandomUsersApi;

@Service
public class CustomerService {
	private Log log = LogFactory.getLog(getClass());
	private static final FakeCustomerBuilder FAKE_CUSTOMER_BUILDER=new FakeCustomerBuilder();

	private String randomUserApi;
	private RestTemplate restTemplate;
	private CustomerRepository customerRepository;

	public CustomerService(@Value("${randomusersapi.url}") final String randomUserApi, final RestTemplate restTemplate,final CustomerRepository customerRepository) {
		this.randomUserApi = randomUserApi;
		this.restTemplate = restTemplate;
		this.customerRepository=customerRepository;
	}

	public void fetchUsersFromRandomUsersAPI() {
		 ResponseEntity<RandomUsersApi> movieResponseEntity = this.restTemplate.getForEntity(
				 randomUserApi, RandomUsersApi.class);
		 List<Customer> customerList=new ArrayList<>();
		 movieResponseEntity.getBody().getResults().forEach(result->{
			 Customer customer = FAKE_CUSTOMER_BUILDER.apply(result);
			 customerList.add(customer);
			 
		 });
		 Iterable<Customer> customers = customerRepository.save(customerList);
		 Stream.of(customers).forEach(this.log::info);
		 
	}

}
