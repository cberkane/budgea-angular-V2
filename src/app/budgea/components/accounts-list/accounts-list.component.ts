import { Account } from './../../models/account.model';
import { finalize, Observable, map } from 'rxjs';
import { BudgeaService, Accounts } from './../../services/budgea.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent implements OnInit {
  public accounts$: Observable<Accounts>;
  public accountsLoading: boolean;

  public dataSource: MatTableDataSource<Account>;
  public displayedColumns: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private budgea: BudgeaService
  ) {}


  ngOnInit(): void {
    this.initAcounts();
  }

  public initAcounts(): void {
    this.accountsLoading = true;
    this.accounts$ = this.budgea.getAccounts$().pipe(
      map((payload: Accounts) => {
        this.dataSource = new MatTableDataSource(payload.accounts);
        return payload;
      }),
      finalize(() => {
        this.accountsLoading = false;
        this.dataSource.paginator = this.paginator;
        this.initTable();
      })
    );
  }

  public initTable(): void {
    this.displayedColumns = [
      'type', 'balance', 'currency'
    ];
  }

}
