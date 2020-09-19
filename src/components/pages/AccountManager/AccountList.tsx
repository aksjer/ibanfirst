import React, { FunctionComponent, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { accountsAtom, sortedAccountsSelector } from '../../../atoms';
import { useFetch } from '../../../hooks';
import { Account } from '../../../models';
import { Error, Loading } from '../../../shared/components';
import { accountsUrl } from '../../../shared/constants/url';
import { cors } from '../../../shared/utils';
import { AccountListHeader } from './AccountListHeader';
import { AccountListItem } from './AccountListItem';
import { AccountSelect } from './AccountSelect';
import { Balance } from './Balance';

export const AccountList: FunctionComponent = () => {
  const { data, loading } = useFetch<{ accounts: Account[] }>(
    cors(accountsUrl),
    15000
  );
  const [accounts, setAccounts] = useRecoilState(accountsAtom);
  const sortedAccounts = useRecoilValue(sortedAccountsSelector);

  useEffect(() => {
    if (data) {
      setAccounts(data.accounts.map((a) => ({ ...a, amount: +a.amount })));
    }
    // eslint-disable-next-line
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return <Error />;
  }

  if (accounts.length === 0) {
    return <h2>No accounts</h2>;
  }

  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <h2>Accounts</h2>
        <AccountSelect />
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <AccountListHeader />
          </thead>
          <tbody>
            {sortedAccounts.map((account) => (
              <AccountListItem key={account.id} account={account} />
            ))}
          </tbody>
        </table>
      </div>
      <Balance />
    </>
  );
};
