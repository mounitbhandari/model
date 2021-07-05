import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalloutSectionComponent } from './callout-section.component';

const routes: Routes = [{ path: '', component: CalloutSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalloutSectionRoutingModule { }
