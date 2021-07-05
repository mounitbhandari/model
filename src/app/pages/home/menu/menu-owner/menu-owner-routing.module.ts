import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuOwnerComponent } from './menu-owner.component';

const routes: Routes = [{ path: '', component: MenuOwnerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuOwnerRoutingModule { }
