'use strict';

function doIt(data, opts) {
  return `${ data.substr(0, opts) }…`;
}

export const truncate = (data, opts) => {
  return doIt(data, opts);
}

export const _truncate = (el, value) => {
  const data = el.textContent;
  el.innerHTML = doIt(data, value);
}