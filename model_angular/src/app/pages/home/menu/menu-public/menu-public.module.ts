import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPublicRoutingModule } from './menu-public-routing.module';
import { MenuPublicComponent } from './menu-public.component';
import {AuthModule} from '../../auth/auth.module';
import {MatButtonModule} from '@angular/material/button';
import {MenuItemModule} from '../menu-item/menu-item.module';
import {_MatMenuDirectivesModule} from '@angular/material/menu';


@NgModule({
    declarations: [
        MenuPublicComponent
    ],
    exports: [
        MenuPublicComponent
    ],
    imports: [
        CommonModule,
        MenuPublicRoutingModule,
        AuthModule,
        MatButtonModule,
        MenuItemModule,
        _MatMenuDirectivesModule
    ]
})
export class MenuPublicModule { }
