import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestSectionRoutingModule } from './test-section-routing.module';
import { TestSectionComponent } from './test-section.component';


@NgModule({
    declarations: [
        TestSectionComponent
    ],
    exports: [
        TestSectionComponent
    ],
    imports: [
        CommonModule,
        TestSectionRoutingModule
    ]
})
export class TestSectionModule { }
