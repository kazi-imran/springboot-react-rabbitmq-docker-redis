package com.kiaziz;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
//import org.h2.server.web.WebServlet;
//import org.h2.server.web.WebServlet;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.module.paramnames.ParameterNamesModule;

@Configuration
public class CustomerManagementConfiguration
{
	
	@Bean
	RestTemplate restTemplate()
	{
		
		Log log = LogFactory.getLog(getClass());
		
		ClientHttpRequestInterceptor interceptor = (HttpRequest request, byte[] body, ClientHttpRequestExecution execution) -> {
			log.info(String.format("request to URI %s with HTTP verb '%s'", request.getURI(), request.getMethod().toString()));
			return execution.execute(request, body);
		};
		
		return new RestTemplateBuilder() // <1>
				.additionalInterceptors(interceptor).build();
	}
	
	@Bean
	public WebMvcConfigurerAdapter corsConfigurer()
	{
		return new WebMvcConfigurerAdapter()
		{
			@Override
			public void addCorsMappings(CorsRegistry registry)
			{
				registry.addMapping("/**").allowedOrigins(new String[] { "*" }).allowedHeaders("*")
						//.allowedMethods("*");
						.allowedMethods("PUT", "DELETE", "POST", "GET", "OPTIONS", "HEAD");
			}
		};
	}
	
//	@Bean
//	public ObjectMapper configureObjectMapper()
//	{
//		
//			ObjectMapper mapper = new ObjectMapper();
//			mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
//			mapper.findAndRegisterModules();					
//			return mapper;
//			
//		
//	}
	
	//	@Bean
	//	public ServletRegistrationBean h2servletRegistration() {
	//	    ServletRegistrationBean registration = new ServletRegistrationBean(new WebServlet());
	//	    registration.addUrlMappings("/console/*");
	//	    return registration;
	//	}
	
}