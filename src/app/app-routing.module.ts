import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { ParentComComponent } from './parent-module/parent-com/parent-com.component';
import { WildCardComponent } from './wild-card/wild-card.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'aboutus',
    pathMatch: 'full'
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
    children: [
      {
        path: 'comp1',
        component: ComponentOneComponent
      }, {
        path: ':comp2',
        component: ComponentTwoComponent
      }
    ]
  }, {
    path: 'contactus',
    component: ContactUsComponent,
    children: [
      {
        path: 'user',
        component: WildCardComponent,
        children: [
          {
            path: ':userid',
            component: ComponentTwoComponent
          }
        ]
      }
    ]
   },
  // {
  //   path: ':userid',
  //   component: WildCardComponent
  // }, 
  {
    path:'app-routing',
    loadChildren:()=>import('./parent-module/parent-module.module')
    .then(m=>m.ParentModuleModule)
  },

  {
    path:'go-to-forms',
    loadChildren:()=>import('./form-m/form-m-routing.module')
    .then(a => a.FormMRoutingModule)
  },
  
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
