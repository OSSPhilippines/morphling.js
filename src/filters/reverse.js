'use strict';

function doIt(data, opts) {
  return data.split('').reverse().join('');
}

export const reverse = (data, opts) => {
  return doIt(data, opts)
}

export const _reverse = (el, value) => {
  const data = el.textContent;
  el.innerHTML = doIt(data, value);
}