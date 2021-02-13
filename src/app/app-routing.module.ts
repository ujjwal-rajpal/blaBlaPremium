/**
 * created by: ujjwal
 * modified by: ujjwal
 * purpose: to define routing
 * created on: 13th Feb, 2021
 * 
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module'
import { ClaimsModule } from './claims/claims.module'




const routes: Routes = [
  { path: '', loadChildren: ()=> DashboardModule },
  { path: 'claims', loadChildren: ()=> ClaimsModule },
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}