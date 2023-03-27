import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { LazyLoadListComponent } from './components/lazy-load-list/lazy-load-list.component';


const routes: Routes = [

  {
    path:"",
    redirectTo:'/dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'footer',
    component:FooterComponent,
    pathMatch:'full'
  },
  {
    path:'lazyLoad',
    component:LazyLoadListComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
