import { Currency } from '../models';
import { corsUrl } from './constants/url';

export function cors(url: string) {
  return corsUrl + '/' + url;
}

export function formatter(locale: string, currency: Currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  });
}
