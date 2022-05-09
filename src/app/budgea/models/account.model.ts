export interface Account {
  iban: string;
  balance: number;
  type: string;
  currency: {
    id: string;
    symbol: string;
  }
}
