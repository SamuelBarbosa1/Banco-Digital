// src/models/account.ts
export enum Currency {
  BRL = 'BRL',
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  BTC = 'BTC'
}

export interface Account {
  id: string;
  name: string;
  birthday: string;
  cpf: string;
  password: string;
  balance: number;
  currency: Currency; 
}

export const accounts: Account[] = [];
