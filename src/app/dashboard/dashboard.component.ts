import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators  } from '@angular/forms';
import {BookingService} from '../services/booking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bookingForm: any;

  edit:Boolean = false;

  success: Boolean;


  constructor(
  	private formBuilder: FormBuilder , 
  	private bookingService : BookingService 
  	) {
  	this.bookingForm = this.formBuilder.group({
  		name:['', Validators.required],
		contact:['', Validators.required],
		time:['', Validators.required],
		numberofpassengers:['', Validators.required],
		price:['', Validators.required],
		rating:['', Validators.required]
  	})
  }


  ngOnInit() {
  }

  onSubmit(bookingData) {

  	if (this.bookingForm.dirty && this.bookingForm.valid) {
	  	bookingData.id = Math.floor(Date.now() / 1000);
	  	this.bookingService.addbooking(bookingData);

	  	this.bookingForm.reset();
	  	this.success=true;
  	}else{
  	}
  }

}
