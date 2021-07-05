import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferSectionRoutingModule } from './offer-section-routing.module';
import { OfferSectionComponent } from './offer-section.component';


@NgModule({
    declarations: [
        OfferSectionComponent
    ],
    exports: [
        OfferSectionComponent
    ],
    imports: [
        CommonModule,
        OfferSectionRoutingModule
    ]
})
export class OfferSectionModule { }
