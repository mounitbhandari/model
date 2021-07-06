import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintDemoRoutingModule } from './print-demo-routing.module';
import { PrintDemoComponent } from './print-demo.component';


@NgModule({
  declarations: [
    PrintDemoComponent
  ],
  imports: [
    CommonModule,
    PrintDemoRoutingModule
  ]
})
export class PrintDemoModule { }
