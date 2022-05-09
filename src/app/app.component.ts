import { AuthService } from './shared/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public opened: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.opened = true;
    this.authService.getConnection$().subscribe({
      complete: () => this.router.navigate(['budgea','connections']),
    });
  }

  ngOnDestroy(): void {
    this.authService.removeToken();
  }

}
