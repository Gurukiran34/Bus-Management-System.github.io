package com.finalProject.gurus.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalProject.gurus.entity.Bus;
import com.finalProject.gurus.repository.BusRepository;
import com.finalProject.gurus.services.BusActions;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import jakarta.transaction.Transactional;


@Service
@Transactional
public class BusServiceImpl implements BusActions {
	@Autowired
	private BusRepository busRepo;
	@Autowired
	private EmailService emailService;

	@Override
	public List<Bus> readAllBuses() {
		return busRepo.findAll();
	}

	public Boolean addBusDetails(Bus bus) {
		if (busRepo.save(bus) != null) {
			emailService.sendEmail("vp.sitrc@gmail.com", "Bus Added Successfully", "Congratulations...!\nNew Bus Added Successfully.\n\tBus Details: \n\t\t" + bus);
			return true;
		} else {
			return false;
		}
	}
	
	public boolean updateBusDetails(String busNumber, Bus bus) {
		Bus busObjFromDb = busRepo.findByBusNumber(busNumber); 
		if(busObjFromDb != null)	{
			busObjFromDb.setIsAvailable(bus.getIsAvailable());
			busRepo.save(busObjFromDb);
			return true;
		}
		return false;
	}

	public boolean deleteBusDetails(String busNumber) {
		Bus busObjFromDb = busRepo.findByBusNumber(busNumber); 
		if(busObjFromDb != null)	{
			String str = OTPGeneratorImpl.generateOtp();
			PhoneNumber to = new PhoneNumber("+");  // receiver mobile number 
			PhoneNumber from = new PhoneNumber("+");  //  sender's twilio number 
			String otpMessage = "Dear Customer, your OTP is " + str + " for deleting Bus details through gurusbus.in \nThank You.";
			Message message = Message.creator(to, from, otpMessage).create();
			busRepo.deleteByBusNumber(busNumber);
			return true;
		}
		return false;
	}

	public Bus getBusByBusNumber(String busNumber) {
		return busRepo.findByBusNumber(busNumber);
	}

}
