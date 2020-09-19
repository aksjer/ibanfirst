import { uniqBy } from 'lodash';
import { atom, selector } from 'recoil';
import { Currency } from '../models';
import { accountsAtom } from './account.atom';

export const currencyAtom = atom<Currency>({
  key: 'currencyAtom',
  default: 'EUR',
});

export const currenciesSelector = selector({
  key: 'currenciesSelector',
  get: ({ get }) =>
    uniqBy(get(accountsAtom), 'currency').map((a) => a.currency),
});
