package com.finalProject.gurus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.finalProject.gurus.entity.TwilioConfig;
import com.twilio.Twilio;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
@EnableConfigurationProperties
public class GurusApplication {

	@Autowired
	private TwilioConfig twilioConfig;
	
	@PostConstruct
	public void setup() {
		Twilio.init(twilioConfig.getAccountSid(), twilioConfig.getAuthToken());
	}
	
	public static void main(String[] args) {
		SpringApplication.run(GurusApplication.class, args);
	}

}
