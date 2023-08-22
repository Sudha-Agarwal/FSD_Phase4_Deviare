import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductMobileListComponent } from './product-mobile-list/product-mobile-list.component';
import { ProductLaptopListComponent } from './product-laptop-list/product-laptop-list.component';
import { ProductMobileDetailComponent } from './product-mobile-detail/product-mobile-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModelRegisterationFormComponent } from './model-registeration-form/model-registeration-form.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'binding', component: BindingsComponent },
  {path:'products', component: ProductListComponent,
  children:[
    {path:'', redirectTo:'mobile-list', pathMatch:'full'},
    {path:'mobile-list', component:ProductMobileListComponent},
    {path:'laptop-list', component: ProductLaptopListComponent},
    {path:'mobile-detail/:id', component: ProductMobileDetailComponent}
  ]
},
{path:'login-form', component: LoginFormComponent},
{path: 'model-registeration-form', component: ModelRegisterationFormComponent},
{path: 'pipes', component:PipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
