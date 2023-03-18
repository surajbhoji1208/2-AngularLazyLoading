import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',loadChildren:()=>import('./product/product.module').then(mod=>mod.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
