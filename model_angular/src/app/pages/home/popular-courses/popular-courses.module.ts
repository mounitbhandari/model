import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularCoursesRoutingModule } from './popular-courses-routing.module';
import { PopularCoursesComponent } from './popular-courses.component';


@NgModule({
    declarations: [
        PopularCoursesComponent
    ],
    exports: [
        PopularCoursesComponent
    ],
    imports: [
        CommonModule,
        PopularCoursesRoutingModule
    ]
})
export class PopularCoursesModule { }
