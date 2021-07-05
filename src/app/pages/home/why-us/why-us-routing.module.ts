import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhyUsComponent } from './why-us.component';

const routes: Routes = [{ path: '', component: WhyUsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhyUsRoutingModule { }
