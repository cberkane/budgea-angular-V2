import { MaterialModule } from './../material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [SideMenuComponent, GenericTableComponent, LoadingComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [SideMenuComponent, GenericTableComponent, LoadingComponent]
})
export class SharedModule {}
