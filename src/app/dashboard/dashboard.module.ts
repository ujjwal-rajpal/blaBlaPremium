import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';

import { DashBoardRoutingModule } from './dashboard-routing.module'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashbordComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
