import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestSectionComponent } from './test-section.component';

const routes: Routes = [{ path: '', component: TestSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestSectionRoutingModule { }
