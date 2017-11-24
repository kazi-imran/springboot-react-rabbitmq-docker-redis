package com.kiaziz;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.socket.config.annotation.AbstractWebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

@Component
@EnableWebSocketMessageBroker
public class WebSocketConfiguration extends AbstractWebSocketMessageBrokerConfigurer {

	public static final String MESSAGE_PREFIX = "/topic";
	
	@Value("${spring.rabbitmq.host}")
	private String rabbitMQHost;
	

	@Override
	@CrossOrigin
	public void registerStompEndpoints(StompEndpointRegistry registry) {
		registry.addEndpoint("/payroll").withSockJS();
	}

	@Override
	@CrossOrigin
	public void configureMessageBroker(MessageBrokerRegistry registry) {
		registry.enableStompBrokerRelay(MESSAGE_PREFIX).		
		setRelayHost(rabbitMQHost)
        .setRelayPort(61613)
        .setClientLogin("guest")
        .setClientPasscode("guest");
		registry.setApplicationDestinationPrefixes("/app");
	}
}