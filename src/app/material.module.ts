import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const materialElements = [
  MatButtonModule,
  MatIconModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSidenavModule,
  MatTableModule,
  MatProgressSpinnerModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [materialElements]
})
export class MaterialModule { }
