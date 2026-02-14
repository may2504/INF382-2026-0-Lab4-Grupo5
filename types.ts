
export interface Transaction {
  id: string;
  title: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  icon: string;
}

export interface User {
  name: string;
  balance: number;
  accountNumber: string;
}
