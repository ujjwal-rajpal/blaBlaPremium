import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashbordComponent } from './dashbord/dashbord.component';



const routes: Routes = [
    { path: 'dashboard', component: DashbordComponent  },
    { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },  
   
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class DashBoardRoutingModule{}