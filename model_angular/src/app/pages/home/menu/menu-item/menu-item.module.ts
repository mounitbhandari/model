import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemRoutingModule } from './menu-item-routing.module';
import { MenuItemComponent } from './menu-item.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    declarations: [
        MenuItemComponent
    ],
    exports: [
        MenuItemComponent
    ],
    imports: [
        CommonModule,
        MenuItemRoutingModule,
        MatMenuModule,
        MatIconModule
    ]
})
export class MenuItemModule { }
