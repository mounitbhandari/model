import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import {LoadingSpinnerModule} from '../../../shared/loading-spinner/loading-spinner.module';
import { MaterialModule } from 'src/app/core/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, NgModel, NgModelGroup, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlexModule } from '@angular/flex-layout';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



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
        LoadingSpinnerModule,
        MaterialModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        NgSelectModule,
        FlexModule,
        FormsModule,
        Ng2SearchPipeModule,
        MatAutocompleteModule,
    ]
})
export class TopModule { }
