import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioSectionComponent } from './portfolio-section.component';

const routes: Routes = [{ path: '', component: PortfolioSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioSectionRoutingModule { }
