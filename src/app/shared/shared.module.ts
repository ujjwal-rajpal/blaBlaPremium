import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';
import { ModuleWithProviders } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyMaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
// import { CustomValidator } from './custom-validator';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MyMaterialModule,
    SharedRoutingModule,
   
  ],
  exports: [
    ReactiveFormsModule,
    FlexLayoutModule,
    MyMaterialModule,
    HeaderComponent,
   
    
  ]

})
export class SharedModule { 

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
