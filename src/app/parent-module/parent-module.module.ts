import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentModuleRoutingModule } from './parent-module-routing.module';
import { ParentComComponent } from './parent-com/parent-com.component';


@NgModule({
  declarations: [
    ParentComComponent
  ],
  imports: [
    CommonModule,
    ParentModuleRoutingModule
  ]
})
export class ParentModuleModule { }
