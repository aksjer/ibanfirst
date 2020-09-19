import React, { FunctionComponent } from 'react';
import { AccountList } from './AccountList';

export const AccountManager: FunctionComponent = () => {
  return (
    <>
      <h1>Manage bank accounts</h1>
      <AccountList />
    </>
  );
};
