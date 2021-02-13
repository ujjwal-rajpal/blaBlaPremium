import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimComponent } from './claim/claim.component';

import {ClaimsRoutingModule } from './claims-routing.module'
import { SharedModule } from '../shared/shared.module';
import { CheckClaimComponent } from './check-claim/check-claim.component';


@NgModule({
  declarations: [ClaimComponent, CheckClaimComponent],
  imports: [
    CommonModule,
    ClaimsRoutingModule,
    SharedModule
  ]
})
export class ClaimsModule { }
