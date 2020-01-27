import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import {BookingService} from '../services/booking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bookingForm;

  constructor(private formBuilder: FormBuilder , private bookingService : BookingService) {
  	this.bookingForm = this.formBuilder.group({
  		name:"",
		contact:"",
		time:"",
		numberofpassengers:"",
		price:"",
		rating:""
  	})
  }


  ngOnInit() {
  }

  onSubmit(bookingData) {
  	this.bookingService.addbooking(bookingData);
    // Process checkout data here
    console.warn('Data provided ', bookingData);

    // this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
  }

}
