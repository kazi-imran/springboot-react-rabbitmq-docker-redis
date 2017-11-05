package com.myecommerce.customer;

import com.myecommerce.events.EntityEvent;

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


