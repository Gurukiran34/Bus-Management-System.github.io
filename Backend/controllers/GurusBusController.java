package com.finalProject.gurus.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finalProject.gurus.entity.Bus;
import com.finalProject.gurus.serviceImpl.BusServiceImpl;

@RestController
@RequestMapping("/gurusbus.in")
public class GurusBusController {
	@Autowired
	private BusServiceImpl busServiceImpl;

	@GetMapping("/getBuses")
	List<Bus> getAllBus() {
		return busServiceImpl.readAllBuses();
	}

	@GetMapping("/getBus/{bus_number}")
	void getBus(@PathVariable("bus_number") String busNumber) {
		Bus busObj = busServiceImpl.getBusByBusNumber(busNumber);
		System.out.println("Bus Details: " + busObj.getBusNumber() + " " + busObj.getSeatingCapacity() + " "
				+ busObj.getStandingCapacity() + " " + busObj.getIsAvailable());
	}

	@PostMapping("/addNewBus")
	void addBus(@RequestBody Bus bus) {
		boolean isAdded = busServiceImpl.addBusDetails(bus);
		if (isAdded) {
			System.out.println("New Bus details Added.");
		} else {
			System.out.println("Failed to add new Bus details.");
		}
	}

	@PutMapping("/updateBusDetails/{bus_number}")
	void updateBus(@PathVariable("bus_number") String busNumber, @RequestBody Bus bus) {
		boolean isUpdated = busServiceImpl.updateBusDetails(busNumber, bus);
		if (isUpdated) {
			System.out.println("Bus details updated.");
		} else {
			System.out.println("Failed to update Bus details.");
		}
	}

	@DeleteMapping("/deleteBusDetails/{bus_number}")
	void deleteBus(@PathVariable("bus_number") String busNumber) {
		boolean isDeleted = busServiceImpl.deleteBusDetails(busNumber);
		if (isDeleted) {
			System.out.println("Bus details deleted.");
		} else {
			System.out.println("Failed to delete Bus details.");
		}
	}
}
