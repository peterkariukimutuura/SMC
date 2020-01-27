import { Component, OnInit } from '@angular/core';




export interface Booking {
  name: string;
  contact: string;
  time: string;
  numberofpassengers: number;
  price: number;
  rating: number;
}

const ELEMENT_DATA: Booking[] = [
  {name: "Peter Kariuki Mutuura", contact: "0712169695", time: "23:34", numberofpassengers: 56, price: 43,rating: 67},
  {name: "James Njogu", contact: "0712169695", time: "23:34", numberofpassengers: 56, price: 43,rating: 67},
  {name: "Steve Katiechi", contact: "0712169695", time: "23:34", numberofpassengers: 56, price: 43,rating: 67}
];


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  // public bookings : Array<object> = [
  // 	{name: "Peter Kariuki Mutuura", contact: "0712169695", time: "23:34", numberofpassengers: 56, price: 43},
  // 	{name: "Steve Okeno", contact: "0712169695", time: "23:34", numberofpassengers: 56, price: 43},
  // 	{name: "Wilson Ochieng", contact: "0712169695", time: "23:34", numberofpassengers: 56, price: 43}
  // ]
  constructor() { }

  displayedColumns: string[] = ['name', 'contact', 'time', 'numberofpassengers','price','rating'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

}
