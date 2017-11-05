package com.myecommerce.events;

import static com.myecommerce.WebSocketConfiguration.MESSAGE_PREFIX;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.hateoas.EntityLinks;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import com.myecommerce.customer.Customer;
import com.myecommerce.customer.CustomerCreationEvent;
import com.myecommerce.customer.CustomerDeletionEvent;

@Component

public class EventHandler {
	private Log log = LogFactory.getLog(getClass());
	private final SimpMessagingTemplate websocket;

	private final EntityLinks entityLinks;

	@Autowired
	public EventHandler(SimpMessagingTemplate websocket, EntityLinks entityLinks) {
		this.websocket = websocket;
		this.entityLinks = entityLinks;
	}


	@EventListener
	public void newCustomer(CustomerCreationEvent<Customer> savedCustomer) {
		log.info("New customer created Event");
		
		this.websocket.convertAndSend(
				MESSAGE_PREFIX + "/newCustomer", getPath(savedCustomer.getCustomer()));
	}

	@EventListener
	public void deleteCustomer(CustomerDeletionEvent<Customer> deletedCustomer) {
		log.info("Customer deleted Event");
		this.websocket.convertAndSend(
				MESSAGE_PREFIX + "/deleteCustomer",getPath(deletedCustomer.getCustomer()));
	}

	

	/**
	 * Take an {@link account} and get the URI using Spring Data REST's {@link EntityLinks}.
	 *
	 * @param account
	 */
	private String getPath(Customer customer) {
		return this.entityLinks.linkForSingleResource(customer.getClass(),
				customer.getId()).toUri().getPath();
	}
}

