import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from './../../models/menu-item.model';
import { menuItems } from './side-menu-items';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Output() toggleMenu = new EventEmitter<boolean>();
  @Input() small: boolean;
  public items: MenuItem[];
  public webviewUrl = 'https://budgea.biapi.pro/2.0/auth/webview/fr/connect?compat=true&client_id=88863387';

  constructor() { }

  ngOnInit(): void {
    this.items = menuItems;
  }

  public emitToggle(): void {
    this.toggleMenu.emit(true);
  }
}
