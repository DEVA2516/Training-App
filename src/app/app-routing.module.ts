import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WildCardComponent } from './wild-card/wild-card.component';

const routes: Routes = [
  {
    path:'aboutus',
    component:AboutUsComponent,
    children:[
      {
        path:'comp1',
        component:ComponentOneComponent
      },{
        path:':comp2',
        component:ComponentTwoComponent
      }
    ]
  }, {
    path:'contactus',
    component:ContactUsComponent
  },{
    path:':userid',
    component:WildCardComponent
  },{
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
