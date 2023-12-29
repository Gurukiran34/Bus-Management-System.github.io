package com.finalProject.gurus.entity;

import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
@DynamicUpdate
public class Bus {
	@Id
	private String busNumber;
	private Integer seatingCapacity;
	private Integer standingCapacity;
	@Column(nullable = false)
	private Boolean isAvailable;
	
	public String getBusNumber() {
		return busNumber;
	}
	public void setBusNumber(String busNumber) {
		this.busNumber = busNumber;
	}

	public Integer getSeatingCapacity() {
		return seatingCapacity;
	}
	public void setSeatingCapacity(Integer seatingCapacity) {
		this.seatingCapacity = seatingCapacity;
	}
	public Integer getStandingCapacity() {
		return standingCapacity;
	}
	public void setStandingCapacity(Integer standingCapacity) {
		this.standingCapacity = standingCapacity;
	}
	public Boolean getIsAvailable() {
		return isAvailable;
	}
	public void setIsAvailable(Boolean isAvailable) {
		this.isAvailable = isAvailable;
	}
	
	public Bus(String busNumber, Integer seatingCapacity, Integer standingCapacity, Boolean isAvailable) {
		super();
		this.busNumber = busNumber;
		this.seatingCapacity = seatingCapacity;
		this.standingCapacity = standingCapacity;
		this.isAvailable = isAvailable;
	}
	public Bus() {
		super();
	}
	@Override
	public String toString() {
		return "Bus [busNumber=" + busNumber + ", seatingCapacity=" + seatingCapacity + ", standingCapacity="
				+ standingCapacity + ", isAvailable=" + isAvailable + "]";
	}
	
	

}
