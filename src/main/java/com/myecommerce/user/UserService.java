package com.myecommerce.user;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.myecommerce.randomuserspapi.RandomUsersApi;

@Service
public class UserService {
	private Log log = LogFactory.getLog(getClass());

	private String randomUserApi;
	private RestTemplate restTemplate;

	public UserService(@Value("${randomusersapi.url}") final String randomUserApi, final RestTemplate restTemplate) {
		this.randomUserApi = randomUserApi;
		this.restTemplate = restTemplate;
	}

	public void fetchUsersFromRandomUsersAPI() {
		 ResponseEntity<RandomUsersApi> movieResponseEntity = this.restTemplate.getForEntity(
				 randomUserApi, RandomUsersApi.class);
		 movieResponseEntity.getBody().getResults().forEach(this.log::info);

	}

}
