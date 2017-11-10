package com.kiaziz;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

import com.kiaziz.address.Address;
import com.kiaziz.customer.Customer;

//@Configuration
public class RestRepositoryConfigurer extends RepositoryRestMvcConfiguration{
	
//	@Override
    protected void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Customer.class);
        config.exposeIdsFor(Address.class);
    }

}
