import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalloutSectionRoutingModule } from './callout-section-routing.module';
import { CalloutSectionComponent } from './callout-section.component';


@NgModule({
    declarations: [
        CalloutSectionComponent
    ],
    exports: [
        CalloutSectionComponent
    ],
    imports: [
        CommonModule,
        CalloutSectionRoutingModule
    ]
})
export class CalloutSectionModule { }
