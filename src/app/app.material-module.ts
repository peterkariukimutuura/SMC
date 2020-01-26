import {NgModule} from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
import { 
	MatMenuModule,
	MatToolbarModule,
	MatButtonModule,
	MatFormFieldModule,
	MatSelectModule,
	MatInputModule 

 } from '@angular/material';

@NgModule({
  exports: [
  	MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule 
  ]
})
export class MaterialModule {}
