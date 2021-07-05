import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import {LoadingSpinnerModule} from '../../../shared/loading-spinner/loading-spinner.module';


@NgModule({
    declarations: [
        TopComponent
    ],
    exports: [
        TopComponent
    ],
    imports: [
        CommonModule,
        TopRoutingModule,
        LoadingSpinnerModule
    ]
})
export class TopModule { }
