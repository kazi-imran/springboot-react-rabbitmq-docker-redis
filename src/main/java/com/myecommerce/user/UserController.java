package com.myecommerce.user;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	private final Log log = LogFactory.getLog(getClass());
	private final UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService=userService;

	}

	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public void getUsers() {
		log.info("getUsers");
		userService.fetchUsersFromRandomUsersAPI();

	}

}
