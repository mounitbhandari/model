import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuSalesManagerComponent } from './menu-sales-manager.component';
import {TransferToAgentComponent} from '../../child-pages/sales-manager/transfer-to-agent/transfer-to-agent.component';
import {TransferFromAgentsComponent} from '../../child-pages/sales-manager/transfer-from-agents/transfer-from-agents.component';
import {StockEntryComponent} from '../../child-pages/sales-manager/stock-entry/stock-entry.component';

const routes: Routes = [{ path: '', component: MenuSalesManagerComponent },
                        { path: 'TransferToAgent', component: TransferToAgentComponent},
                        { path: 'TransferFromAgents', component: TransferFromAgentsComponent},
                        { path: 'StockEntry', component: StockEntryComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuSalesManagerRoutingModule { }
