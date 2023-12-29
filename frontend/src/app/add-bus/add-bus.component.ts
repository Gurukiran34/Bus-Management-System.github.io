import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-bus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit{
  
  bus: Bus  = new Bus();

  constructor(private busService: BusService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveBus(){
    this.busService.addBus(this.bus).subscribe( data =>{
      console.log(data);
      this.goToBusList();
    },
    error => console.log(error));
  }

  goToBusList(){
    this.router.navigate(['/buses']);
  }
  
  onSubmit(){
    console.log(this.bus);
    this.saveBus();
  }

}
