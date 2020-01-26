import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bookingForm;

  constructor(private formBuilder: FormBuilder) {
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
    // Process checkout data here
    console.warn('Data provided ', bookingData);

    // this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
  }

}
