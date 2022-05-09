import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { ConnectionsListComponent } from './components/connections-list/connections-list.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';


const routes: Routes = [
  {
    path: 'connections',
    component: ConnectionsListComponent,
  },
  {
    path: 'accounts',
    component: AccountsListComponent,
  },
  {
    path: 'transactions',
    component: TransactionsListComponent,
  },
];

@NgModule({
  declarations: [
    ConnectionsListComponent,
    AccountsListComponent,
    TransactionsListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class BudgeaModule {}
