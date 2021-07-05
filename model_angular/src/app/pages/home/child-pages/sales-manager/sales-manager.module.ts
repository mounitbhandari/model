import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesManagerRoutingModule } from './sales-manager-routing.module';
import { SalesManagerComponent } from './sales-manager.component';


@NgModule({
  declarations: [
    SalesManagerComponent
  ],
  imports: [
    CommonModule,
    SalesManagerRoutingModule
  ]
})
export class SalesManagerModule { }
