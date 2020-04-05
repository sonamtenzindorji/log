import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxiRegistrationPage } from './taxi-registration.page';

const routes: Routes = [
  {
    path: '',
    component: TaxiRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxiRegistrationPageRoutingModule {}
