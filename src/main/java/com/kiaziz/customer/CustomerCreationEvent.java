package com.kiaziz.customer;

import com.kiaziz.events.EntityEvent;

public class CustomerCreationEvent<Customer> extends EntityEvent<Customer> 
{
	
	private Customer customer;
	public CustomerCreationEvent(Customer customer)
	{
		super(customer);
		this.customer=customer;
	}
	public Customer getCustomer() {
		return customer;
	}
	
}


