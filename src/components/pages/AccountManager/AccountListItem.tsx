import React, { FunctionComponent } from 'react';
import { Account } from '../../../models';
import { formatter } from '../../../shared/utils';

interface Props {
  account: Account;
}

export const AccountListItem: FunctionComponent<Props> = ({ account }) => (
  <tr>
    <td>{account.holder.name} </td>
    <td>{account.holderBank.clearingCode}</td>
    <td>{account.holderBank.bic}</td>
    <td>{formatter('fr-FR', account.currency).format(account.amount)}</td>
  </tr>
);
