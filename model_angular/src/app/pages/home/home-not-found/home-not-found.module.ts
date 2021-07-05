import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeNotFoundRoutingModule } from './home-not-found-routing.module';
import { HomeNotFoundComponent } from './home-not-found.component';


@NgModule({
  declarations: [
    HomeNotFoundComponent
  ],
  imports: [
    CommonModule,
    HomeNotFoundRoutingModule
  ]
})
export class HomeNotFoundModule { }
