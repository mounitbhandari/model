import {DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateAdapter } from '@angular/material/core';
import { DateFormat } from './date-format';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {NgxPrinterModule} from 'ngx-printer';
import {HomeModule} from './pages/home/home.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './services/auth.interceptor';
// import {NgxPrintModule} from "ngx-print";






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPrinterModule.forRoot({printOpenWindow: false}),
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatSliderModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    HomeModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
              {provide: LocationStrategy, useClass: HashLocationStrategy},
              {provide: DateAdapter, useClass: DateFormat}, {provide: DEFAULT_CURRENCY_CODE, useValue: 'INR'} ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('en-in'); // DD/MM/YYYY
  }
}
