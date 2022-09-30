import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
//import { HttpClientModule } from @angular
import { HttpClientModule } from  '@angular/common/http';
import {FormMModule} from './form-m/form-m.module'
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsComponent } from './forms/forms.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { FormsAdduserComponent } from './forms-adduser/forms-adduser.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    WildCardComponent,
    PageNotFoundComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    FormsComponent,
    FormsListComponent,
    FormsAdduserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormMModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
