import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComComponent } from './parent-com/parent-com.component';

const routes: Routes = [{
  path:'',
  component:ParentComComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentModuleRoutingModule { }
