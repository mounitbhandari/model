import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferFromAgentsRoutingModule } from './transfer-from-agents-routing.module';
import { TransferFromAgentsComponent } from './transfer-from-agents.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {TransferToAgentRoutingModule} from '../transfer-to-agent/transfer-to-agent-routing.module';
import {MaterialModule} from '../../../../../core/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {PopoverModule} from 'ngx-smart-popover';


@NgModule({
  declarations: [
    TransferFromAgentsComponent
  ],
    imports: [
        CommonModule,
        TransferFromAgentsRoutingModule,
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
        MatSortModule,
        MatIconModule,
        PopoverModule

    ]
})
export class TransferFromAgentsModule { }
