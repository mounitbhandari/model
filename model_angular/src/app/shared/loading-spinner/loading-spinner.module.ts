import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerRoutingModule } from './loading-spinner-routing.module';
import { LoadingSpinnerComponent } from './loading-spinner.component';


@NgModule({
    declarations: [
        LoadingSpinnerComponent
    ],
    exports: [
        LoadingSpinnerComponent
    ],
    imports: [
        CommonModule,
        LoadingSpinnerRoutingModule
    ]
})
export class LoadingSpinnerModule { }
