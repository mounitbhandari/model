import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNotFoundComponent } from './home-not-found.component';

const routes: Routes = [{ path: '', component: HomeNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeNotFoundRoutingModule { }
