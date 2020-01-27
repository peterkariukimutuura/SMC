import { Component, OnInit } from '@angular/core';

import {BookingService} from '../services/booking.service';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private bookingService : BookingService) { }

  displayedColumns: string[] = ['name', 'contact', 'time', 'numberofpassengers','price','rating','action'];
  dataSource = this.bookingService.bookingData;

  ngOnInit() {
  }

  EditBooking(obj){
  	console.log(obj);
  }

}
