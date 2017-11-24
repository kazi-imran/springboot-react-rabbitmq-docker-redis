package com.kiaziz;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

import com.kiaziz.account.Account;
import com.kiaziz.address.Address;
import com.kiaziz.customer.Customer;

@SpringBootApplication
@EnableJpaAuditing
@EnableCaching
@Import(RepositoryRestMvcConfiguration.class)
public class StarterMain
{
	
	public static void main(String[] args)
	{
		SpringApplication.run(StarterMain.class, args);
	}
	
	@Autowired
	private RepositoryRestConfiguration repositoryRestConfiguration;
	
	@PostConstruct
	public void exposeIds()
	{
		this.repositoryRestConfiguration.exposeIdsFor(new Class[] { Customer.class, Address.class, Account.class });
		this.repositoryRestConfiguration.setDefaultPageSize(10);
		this.repositoryRestConfiguration.setBasePath("/api");
		
	}
	
}
