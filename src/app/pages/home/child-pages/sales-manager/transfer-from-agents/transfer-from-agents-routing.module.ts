import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferFromAgentsComponent } from './transfer-from-agents.component';

const routes: Routes = [{ path: '', component: TransferFromAgentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferFromAgentsRoutingModule { }
