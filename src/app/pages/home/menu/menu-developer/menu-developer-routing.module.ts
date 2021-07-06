import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuDeveloperComponent } from './menu-developer.component';

const routes: Routes = [{ path: '', component: MenuDeveloperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuDeveloperRoutingModule { }
