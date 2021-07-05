import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintDemoComponent } from './print-demo.component';

const routes: Routes = [{ path: '', component: PrintDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintDemoRoutingModule { }
