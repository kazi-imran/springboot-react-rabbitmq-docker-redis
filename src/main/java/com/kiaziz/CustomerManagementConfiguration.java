package com.kiaziz;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
//import org.h2.server.web.WebServlet;
//import org.h2.server.web.WebServlet;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class CustomerManagementConfiguration {

	@Bean
	RestTemplate restTemplate() {

		Log log = LogFactory.getLog(getClass());

		ClientHttpRequestInterceptor interceptor = (HttpRequest request, byte[] body,
				ClientHttpRequestExecution execution) -> {
			log.info(String.format("request to URI %s with HTTP verb '%s'", request.getURI(),
					request.getMethod().toString()));
			return execution.execute(request, body);
		};

		return new RestTemplateBuilder() // <1>
				.additionalInterceptors(interceptor).build();
	}

	@Bean
	public WebMvcConfigurer  corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOrigins(new String[]{"*"})
						.allowedHeaders("*")
						//.allowedMethods("*");
						.allowedMethods("PUT", "DELETE","POST","GET","OPTIONS","HEAD");
			}
		};
	}
	
//	@Bean
//	public ServletRegistrationBean h2servletRegistration() {
//	    ServletRegistrationBean registration = new ServletRegistrationBean(new WebServlet());
//	    registration.addUrlMappings("/console/*");
//	    return registration;
//	}

}