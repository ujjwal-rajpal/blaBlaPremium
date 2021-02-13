import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
    imports:[
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule
    ],
    exports:[
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule
    ]
})

export class MyMaterialModule{}
