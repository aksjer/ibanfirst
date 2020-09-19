import { orderBy, sumBy } from 'lodash';
import { atom, selector } from 'recoil';
import { rates } from '../mocks/rates.mock';
import { Account } from '../models';
import { currencyAtom } from './currency.atom';

export const accountsAtom = atom<Account[]>({
  key: 'accountsAtom',
  default: [],
});

export const convertedAccountsSelector = selector({
  key: 'convertedAccountsSelector',
  get: ({ get }) => {
    const currency = get(currencyAtom);
    return get(accountsAtom).reduce<Account[]>(
      (acc, cur) => [
        ...acc,
        {
          ...cur,
          amount: cur.amount * rates[cur.currency][currency],
          currency,
        },
      ],
      []
    );
  },
});

export const sortedAccountsSelector = selector({
  key: 'sortedAccountsSelector',
  get: ({ get }) => orderBy(get(convertedAccountsSelector), 'amount', 'desc'),
});

export const totalAmountSelector = selector({
  key: 'totalAmountSelector',
  get: ({ get }) => sumBy(get(convertedAccountsSelector), 'amount'),
});
