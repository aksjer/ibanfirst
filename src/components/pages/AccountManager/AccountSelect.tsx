import React, { FunctionComponent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currenciesSelector, currencyAtom } from '../../../atoms/currency.atom';

export const AccountSelect: FunctionComponent = () => {
  const currencies = useRecoilValue(currenciesSelector);
  const [currency, setCurrency] = useRecoilState(currencyAtom);

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {currency}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {currencies.map((c) => (
          <a
            key={c}
            className="dropdown-item"
            href="/#"
            onClick={() => setCurrency(c)}
          >
            {c}
          </a>
        ))}
      </div>
    </div>
  );
};
