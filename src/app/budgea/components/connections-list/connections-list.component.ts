import { Observable, finalize } from 'rxjs';
import { BudgeaService, Connections } from './../../services/budgea.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connections-list',
  templateUrl: './connections-list.component.html',
  styleUrls: ['./connections-list.component.scss']
})
export class ConnectionsListComponent implements OnInit {
  public connections$: Observable<Connections>;
  public connectionsLoading: boolean;

  constructor(
    private budgea: BudgeaService
  ) { }

  ngOnInit(): void {
    this.initConnections();
  }

  public initConnections(): void {
    this.connectionsLoading = true;
    this.connections$ = this.budgea.getConnections$().pipe(
      finalize(() => this.connectionsLoading = false),
    );
  }

}
