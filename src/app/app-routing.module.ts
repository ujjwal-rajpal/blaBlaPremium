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





const routes: Routes = [
  { path: '', loadChildren: ()=> DashboardModule },
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}