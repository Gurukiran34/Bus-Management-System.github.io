import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-bus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {

  busNumber!: string;
  bus: Bus = new Bus();
  constructor(private busService: BusService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.busNumber = this.route.snapshot.params['busNumber'];

    this.busService.getBusByBusNumber(this.busNumber).subscribe(data => {
      this.bus = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.busService.updateBus(this.busNumber, this.bus).subscribe(data => {
      this.goToBusList();
    }
      , error => console.log(error));
  }

  goToBusList() {
    this.router.navigate(['/buses']);
  }

}
