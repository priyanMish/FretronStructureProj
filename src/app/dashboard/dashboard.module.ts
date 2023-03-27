import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from '../store/reducers/store.reducer';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContainerComponent,
    DashboardHeaderComponent,
    DashboardListComponent,
    DashboardCardsComponent,
 
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule
  ],
  exports: [
    DashboardComponent,
    DashboardCardsComponent
  ],
  providers:[]
  
})
export class DashboardModule { }
