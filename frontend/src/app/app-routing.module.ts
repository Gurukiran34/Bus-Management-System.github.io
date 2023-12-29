import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'buses', component: BusListComponent},
  {path: 'add-bus', component: AddBusComponent},
  {path: 'update-bus/:busNumber', component: UpdateBusComponent},
  {path: 'view-bus/:busNumber', component: ViewBusComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-out', component: SignOutComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
