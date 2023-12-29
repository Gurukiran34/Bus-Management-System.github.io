package com.finalProject.gurus.entity;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "twilio")
public class TwilioConfig {

	private String accountSid;
	private String authToken;
	private String phoneNumber;

	public String getAccountSid() {
		return accountSid;
	}

	public String getAuthToken() {
		return authToken;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setAccountSid(String accountSid) {
		this.accountSid = accountSid;
	}

	public void setAuthToken(String authToken) {
		this.authToken = authToken;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
}