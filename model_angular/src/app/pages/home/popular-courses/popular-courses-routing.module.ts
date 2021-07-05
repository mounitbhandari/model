import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularCoursesComponent } from './popular-courses.component';

const routes: Routes = [{ path: '', component: PopularCoursesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopularCoursesRoutingModule { }
