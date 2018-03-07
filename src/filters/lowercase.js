'use strict';

function doIt(data, opts) {
  return data.toLowerCase();
}

export const lowercase = (data, opts) => {
  return doIt(data, opts);
}

export const _lowercase = (el, value) => {
  const data = el.textContent;
  el.innerHTML = doIt(data, value);
}