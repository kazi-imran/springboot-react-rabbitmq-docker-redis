package com.myecommerce;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

import com.myecommerce.customer.Customer;

//@Configuration
public class RestRepositoryConfigurer extends RepositoryRestMvcConfiguration{
	
//	@Override
    protected void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Customer.class);
    }

}
