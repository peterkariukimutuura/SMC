import { Injectable } from '@angular/core';

export interface Booking {
  id:number,
  name: string;
  contact: string;
  time: string;
  numberofpassengers: number;
  price: number;
  rating: number;
}


@Injectable({
  providedIn: 'root'
})


export class BookingService {

	bookingData: Booking[] = [
	  // {id : 2,name: "Peter Kariuki Mutuura", contact: "0712169695", time: "23:34", numberofpassengers: 56, price: 43,rating: 67},
	  // {id : 3,name: "James Njogu", contact: "0712169695", time: "23:34", numberofpassengers: 56, price: 43,rating: 67},
	  // {id : 4,name: "Steve Katiechi", contact: "0712169695", time: "23:34", numberofpassengers: 56, price: 43,rating: 67}
	];


  constructor() { }

  addbooking(obj){
  	this.bookingData.push(obj);
  }
}
