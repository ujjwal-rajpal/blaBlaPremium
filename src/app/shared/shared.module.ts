import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';
import { ModuleWithProviders } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyMaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
// import { CustomValidator } from './custom-validator';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MyMaterialModule,
    SharedRoutingModule,
   
  ],
  exports: [
    ReactiveFormsModule,
    FooterComponent,
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
