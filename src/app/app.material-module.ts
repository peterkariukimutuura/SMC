import {NgModule} from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule, MatToolbarModule ,MatButtonModule } from '@angular/material';

@NgModule({
  exports: [
  	MatMenuModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}
