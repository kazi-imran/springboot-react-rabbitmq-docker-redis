package com.kiaziz.customer;

import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceAssembler;

public class CustomerResourceAssembler implements
ResourceAssembler<Customer, Resource<Customer>>
{

	@Override
	public Resource<Customer> toResource(Customer entity)
	{

		return null;
	}
	
}
