import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import { currencyAtom, totalAmountSelector } from '../../../atoms';
import { formatter } from '../../../shared/utils';

export const Balance: FunctionComponent = () => {
  const currency = useRecoilValue(currencyAtom);
  const total = useRecoilValue(totalAmountSelector);
  return (
    <div className="d-flex justify-content-end mt-5">
      <div className="font-weight-bold">
        Consolidated balance : {formatter('fr-FR', currency).format(total)}
      </div>
    </div>
  );
};
