import { MatPaginator } from '@angular/material/paginator';
import { Transaction } from './../../models/transaction.model';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, finalize, map } from 'rxjs';
import { BudgeaService, Transactions } from './../../services/budgea.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss'],
})
export class TransactionsListComponent implements OnInit {
  public transactions$: Observable<Transactions>;
  public transactionsLoading: boolean;

  public dataSource: MatTableDataSource<Transaction>;
  public displayedColumns: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private budgea: BudgeaService) {}

  ngOnInit(): void {
    this.initTransactions();
  }

  public initTransactions(): void {
    this.transactionsLoading = true;
    this.transactions$ = this.budgea.getTransactions$().pipe(
      map((payload: Transactions) => {
        this.dataSource = new MatTableDataSource(payload.transactions);
        return payload;
      }),
      finalize(() => {
        this.transactionsLoading = false;
        this.dataSource.paginator = this.paginator;
        this.initTable();
      })
    );
  }

  public initTable(): void {
    this.displayedColumns = [
      'type',
      'value',
      'date'
    ]
  }
}
