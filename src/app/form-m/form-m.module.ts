import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormMRoutingModule } from './form-m-routing.module';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    FormMRoutingModule
  ]
})
export class FormMModule { }
