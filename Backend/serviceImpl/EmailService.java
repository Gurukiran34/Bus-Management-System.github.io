package com.finalProject.gurus.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Async
	public void sendEmail(String toEmail, String subject, String message) {
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setTo(toEmail);
		simpleMailMessage.setSubject(subject);
		simpleMailMessage.setText(message);
		simpleMailMessage.setFrom("safarbus.2023@gmail.com");
		javaMailSender.send(simpleMailMessage);
	}

}
