package com.myecommerce.customer;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {

	private final Log log = LogFactory.getLog(getClass());
	private final CustomerService userService;

	@Autowired
	public CustomerController(CustomerService userService) {
		this.userService=userService;

	}

	@RequestMapping(value = "/customers", method = RequestMethod.GET)
	public void getUsers() {
		log.info("getUsers");
		userService.fetchUsersFromRandomUsersAPI();

	}

}
