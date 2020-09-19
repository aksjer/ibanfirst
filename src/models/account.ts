import { Currency } from './currency';
import { Holder } from './holder';
import { HolderBank } from './holder-bank';

export interface Account {
  id: string;
  accountNumber: string;
  amount: number;
  correspondentBank: any;
  currency: Currency;
  tag: string;
  holder: Holder;
  holderBank: HolderBank;
}
