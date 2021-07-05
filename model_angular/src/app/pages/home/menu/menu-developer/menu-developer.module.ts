import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuDeveloperRoutingModule } from './menu-developer-routing.module';
import { MenuDeveloperComponent } from './menu-developer.component';
import {MenuItemModule} from '../menu-item/menu-item.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [
        MenuDeveloperComponent
    ],
    exports: [
        MenuDeveloperComponent
    ],
    imports: [
        CommonModule,
        MenuDeveloperRoutingModule,
        MenuItemModule,
        MatMenuModule,
        MatButtonModule
    ]
})
export class MenuDeveloperModule { }
