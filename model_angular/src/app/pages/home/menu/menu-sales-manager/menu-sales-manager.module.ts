import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuSalesManagerRoutingModule } from './menu-sales-manager-routing.module';
import { MenuSalesManagerComponent } from './menu-sales-manager.component';
import {MenuItemModule} from '../menu-item/menu-item.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [
        MenuSalesManagerComponent
    ],
    exports: [
        MenuSalesManagerComponent
    ],
    imports: [
        CommonModule,
        MenuSalesManagerRoutingModule,
        MenuItemModule,
        MatMenuModule,
        MatButtonModule
    ]
})
export class MenuSalesManagerModule { }
