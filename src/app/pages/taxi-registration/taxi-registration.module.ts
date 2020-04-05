import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxiRegistrationPageRoutingModule } from './taxi-registration-routing.module';

import { TaxiRegistrationPage } from './taxi-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxiRegistrationPageRoutingModule
  ],
  declarations: [TaxiRegistrationPage]
})
export class TaxiRegistrationPageModule {}
