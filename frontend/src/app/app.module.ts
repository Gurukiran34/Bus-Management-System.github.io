import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { SignOutComponent } from './sign-out/sign-out.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,
    DeleteBusComponent,
    ViewBusComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    SignOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({ preserveScroll: true }),
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
