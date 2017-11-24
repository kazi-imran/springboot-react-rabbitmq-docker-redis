package com.kiaziz.customer;

import com.kiaziz.events.EntityEvent;

public class CustomerDeletionEvent <Customer> extends EntityEvent<Customer> 
{
	
	private Customer customer;
	public CustomerDeletionEvent(Customer customer)
	{
		super(customer);
		this.customer=customer;
	}
	public Customer getCustomer() {
		return customer;
	}
	
}

