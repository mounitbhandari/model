import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioSectionRoutingModule } from './portfolio-section-routing.module';
import { PortfolioSectionComponent } from './portfolio-section.component';


@NgModule({
  declarations: [
    PortfolioSectionComponent
  ],
  imports: [
    CommonModule,
    PortfolioSectionRoutingModule
  ]
})
export class PortfolioSectionModule { }
