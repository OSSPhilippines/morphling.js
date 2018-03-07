'use strict';

function doIt(data, opts) {
  return data.toUpperCase();
}

export const uppercase = (data, opts) => {
  return doIt(data, opts);
}

export const _uppercase = (el, value) => {
  const data = el.textContent;
  el.innerHTML = doIt(data, value);
}