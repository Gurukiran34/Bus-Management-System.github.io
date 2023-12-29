package com.finalProject.gurus.serviceImpl;

import java.util.Random;

public class OTPGeneratorImpl {

	private static final int OTP_LENGTH = 6;

	public static String generateOtp() {
		Random random = new Random();
		StringBuilder otp = new StringBuilder();

		for (int ctr = 0; ctr < OTP_LENGTH; ctr++) {
			otp.append(random.nextInt(10));
		}

		return otp.toString();
	}
}
