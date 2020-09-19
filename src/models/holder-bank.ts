import { Address } from './address';

export interface HolderBank {
  address: Address;
  bic: string;
  name: string;
  clearingCode: string;
  clearingCodeType: string;
}
