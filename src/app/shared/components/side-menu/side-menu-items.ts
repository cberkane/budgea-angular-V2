import { MenuItem } from './../../models/menu-item.model';
export const menuItems: MenuItem[] = [
  {
    label: 'Connexions',
    route: '/budgea/connections',
    icon: 'timeline',
  },
  {
    label: 'Comptes',
    route: '/budgea/accounts',
    icon: 'account_balance_wallet',
  },
  {
    label: 'Transactions',
    route: '/budgea/transactions',
    icon: 'swap_horiz',
  },
]
