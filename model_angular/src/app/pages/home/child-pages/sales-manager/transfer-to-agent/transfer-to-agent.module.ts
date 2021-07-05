import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferToAgentRoutingModule } from './transfer-to-agent-routing.module';
import { TransferToAgentComponent } from './transfer-to-agent.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MaterialModule} from "../../../../../core/material.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import {NgSelectModule} from '@ng-select/ng-select';
import {FlexModule} from '@angular/flex-layout';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";
import {MatBadgeModule} from "@angular/material/badge";
// import {MatSortModule} from "@angular/material/sort";
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatIconHarness} from '@angular/material/icon/testing';


@NgModule({
  declarations: [
    TransferToAgentComponent
  ],
    imports: [
        CommonModule,
        TransferToAgentRoutingModule,
        MaterialModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatCardModule,
        NgSelectModule,
        FlexModule,
        MatCheckboxModule,
        FormsModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,
        MatBadgeModule,
        // MatSortModule,
        MatIconModule
    ]
})
export class TransferToAgentModule {}


