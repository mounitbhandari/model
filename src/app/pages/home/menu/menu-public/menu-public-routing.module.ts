import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPublicComponent } from './menu-public.component';

const routes: Routes = [{ path: '', component: MenuPublicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPublicRoutingModule { }
