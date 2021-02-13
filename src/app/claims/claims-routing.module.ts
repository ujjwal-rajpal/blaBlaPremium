import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';
import { CheckClaimComponent } from './check-claim/check-claim.component';

const routes: Routes = [
    { path: '', component: ClaimComponent  },
    { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
 
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ClaimsRoutingModule{}  
