'use strict';

function doIt(data, opts) {
  if(!data) return opts;
}

export const placeholder = (data, opts) => {
  return doIt(data, opts);
}

export const _placeholder = (el, value) => {
  const data = el.textContent;
  el.innerHTML = doIt(data, value);
}