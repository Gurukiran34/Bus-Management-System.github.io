import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-bus',
  templateUrl: './view-bus.component.html',
  styleUrls: ['./view-bus.component.css']
})
export class ViewBusComponent implements  OnInit{

  busNumber!: string;
  bus!: Bus;
  constructor(private route: ActivatedRoute, private busService: BusService) { }

  ngOnInit(): void {
    this.busNumber = this.route.snapshot.params['busNumber'];

    this.bus = new Bus();
    this.busService.getBusByBusNumber(this.busNumber).subscribe( data => {
      this.bus = data;
    });
  }

}