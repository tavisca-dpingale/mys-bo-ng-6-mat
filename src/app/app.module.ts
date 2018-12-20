import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToolbarlayoutComponent } from './toolbarlayout/toolbarlayout.component';
import { BlanklayoutComponent } from './blanklayout/blanklayout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

import { HttpClientModule } from '@angular/common/http';
import { AnakComponent } from './anak/anak.component';
import { ShankhComponent } from './shankh/shankh.component';
import { VanshiComponent } from './vanshi/vanshi.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    ToolbarlayoutComponent,
    BlanklayoutComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    UserprofileComponent,
    AnakComponent,
    ShankhComponent,
    VanshiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
