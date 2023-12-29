package com.finalProject.gurus.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.finalProject.gurus.entity.Bus;

public interface BusRepository extends JpaRepository<Bus, String>{

	Bus findByBusNumber(String busNumber);

	Integer deleteByBusNumber(String busNumber);

}
