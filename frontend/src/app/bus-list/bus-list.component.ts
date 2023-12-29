import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
[x: string]: any;

  buses!: Bus[];
  count: number = 5;
  p: number = 1;

  constructor(private busService: BusService,
    private router: Router, protected userService: UserService) { }

  ngOnInit(): void {
    this.getBuses();
  }

  private getBuses(){
    this.busService.getBusList().subscribe(data => {
      this.buses = data;
    });
  }

  getBusesAsc(){
    this.busService.getBusesAsc().subscribe(data => {
      this.buses = data;
    })
  }

  getBusesDsc(){
    this.busService.getBusesDsc().subscribe(data => {
      this.buses = data;
    })
  }

  getBusesLike(bus_agency: string){
    if(bus_agency.length>0){
    this.busService.getBusesLike(bus_agency).subscribe(data => {
      this.buses = data;
    })
  } else{
    this.getBuses();
  }
  }

  viewBus(busNumber: string){
    this.router.navigate(['view-bus', busNumber]);
  }

  updateBus(busNumber: string){
    this.router.navigate(['update-bus', busNumber]);
  }

  deleteBus(busNumber: string){
    this.busService.deleteBus(busNumber).subscribe( data => {
      console.log(data);
      this.getBuses();
    })
  }
}






