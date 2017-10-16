package com.myecommerce;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.myecommerce.customer.Customer;

@SpringBootApplication
@EnableJpaAuditing
public class StarterMain {

	public static void main(String[] args) {
		SpringApplication.run(StarterMain.class, args);
	}

	@Autowired private RepositoryRestConfiguration repositoryRestConfiguration;

    @PostConstruct
    public void exposeIds() {
        this.repositoryRestConfiguration.exposeIdsFor(Customer.class);
    }

}
