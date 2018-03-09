'use strict';

import currencies from '../lib/currencies';

function doIt(data, code) {
  if(!code) code = 'USD';
  let preffix = '';
  let match = currencies.filter(item => code === item.code);
  if(match.length === 0) {
    preffix = '$';
    console.warn(`Morphling Warn: The provided code '${ code }' does not exist. Replaced with default $ symbol.`);
  } else {
    preffix = match[0].symbol;
  }
  return `${ preffix }${ data }`;
}

export const currency = (data, opts) => {
  return doIt(data, opts);
}

export const _currency = (el, value) => {
  const data = el.textContent;
  el.innerHTML = doIt(data, value);
}