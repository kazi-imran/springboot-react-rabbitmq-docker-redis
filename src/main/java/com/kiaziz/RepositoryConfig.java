package com.kiaziz;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

import com.kiaziz.account.Account;
import com.kiaziz.address.Address;
import com.kiaziz.customer.Customer;

@Configuration
public class RepositoryConfig extends
RepositoryRestConfigurerAdapter {


}