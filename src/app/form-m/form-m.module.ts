import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'

import { FormsModule } from '@angular/forms';
import { FormMRoutingModule } from './form-m-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [
    UsersListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    FormMRoutingModule,
    BrowserModule,
    FormsModule
  ]
})
export class FormMModule { }
