import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatIconModule, MatTabsModule, MatToolbarModule} from '@angular/material';

const MAT_MODULES = [
  MatIconModule,
  MatTabsModule,
  MatButtonModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MAT_MODULES
  ],
  exports: [ MAT_MODULES ]
})
export class SharedModule { }
