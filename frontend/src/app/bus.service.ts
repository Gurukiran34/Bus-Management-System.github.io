import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private baseURL = "http://localhost:8999/gurusbus.in";

  constructor(private httpClient: HttpClient) { }
  
  getBusList(): Observable<Bus[]>{
    return this.httpClient.get<Bus[]>(`${this.baseURL}/getBuses`);

  }

  addBus(bus: Bus): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addNewBus`, bus);
  }

  getBusByBusNumber(busNumber: string): Observable<Bus>{
    return this.httpClient.get<Bus>(`${this.baseURL}/getBus/${busNumber}`);
  }

  getBusesAsc(): Observable<Bus[]>{
    return this.httpClient.get<Bus[]>(`${this.baseURL}/getAllByAgencyAsc`);
  }

  getBusesDsc(): Observable<Bus[]>{
    return this.httpClient.get<Bus[]>(`${this.baseURL}/getAllByAgencyDesc`);
  }

  getBusesLike(bus_agency: string): Observable<Bus[]>{
    return this.httpClient.get<Bus[]>(`${this.baseURL}/getBusByAgency/${bus_agency}`);
  }

  updateBus(busNumber: string, bus: Bus): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateBusDetails/${busNumber}`, bus);
  }

  deleteBus(busNumber: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteBusDetails/${busNumber}`);
  }
}