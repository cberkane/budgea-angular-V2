import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

import { Account } from '../models/account.model';
import { Connection } from './../models/connection.model';
import { environment } from './../../../environments/environment';
import { Transaction } from './../models/transaction.model';

// TODO: put in model
export interface Connections {
  connections: Connection[];
  total: number;
}

export interface Accounts {
  balance: number;
  total: number;
  accounts: Account[];
}

export interface Transactions {
  total: number;
  transactions: Transaction[];
}

@Injectable({
  providedIn: 'root',
})
export class BudgeaService {
  private connexionsUrl = `${environment.budgeaUrl}/users/me/connections?expand=connector,accounts`;
  private accountsUrl = `${environment.budgeaUrl}/users/me/accounts?expand=connexion`;
  private transactionsUrl = `${environment.budgeaUrl}/users/me/transactions`;

  constructor(private http: HttpClient) {}

  public getConnections$(): Observable<Connections> {
    return this.http.get<Connections>(this.connexionsUrl).pipe(
      shareReplay()
    );
  }

  public getAccounts$(): Observable<Accounts> {
    return this.http.get<Accounts>(this.accountsUrl);
  }

  public getTransactions$(): Observable<Transactions> {
    return this.http.get<Transactions>(this.transactionsUrl);
  }
}


