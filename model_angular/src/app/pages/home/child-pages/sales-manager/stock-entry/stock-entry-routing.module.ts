import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockEntryComponent } from './stock-entry.component';

const routes: Routes = [{ path: '', component: StockEntryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockEntryRoutingModule { }
