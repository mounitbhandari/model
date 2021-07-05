import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhyUsRoutingModule } from './why-us-routing.module';
import { WhyUsComponent } from './why-us.component';


@NgModule({
    declarations: [
        WhyUsComponent
    ],
    exports: [
        WhyUsComponent
    ],
    imports: [
        CommonModule,
        WhyUsRoutingModule
    ]
})
export class WhyUsModule { }
