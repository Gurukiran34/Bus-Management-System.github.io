package com.finalProject.gurus.serviceImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalProject.gurus.entity.User;
import com.finalProject.gurus.repository.UserRepository;
import com.finalProject.gurus.services.UserActions;

@Service
public class UserServiceImpl implements UserActions {
	@Autowired
	private UserRepository userRepository;

	public void addUser(User user) {

		this.userRepository.save(user);
	}

	public Optional<User> getUserByEmail(String email) {
		return this.userRepository.findByUserEmail(email);
	}
}
