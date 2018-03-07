'use strict';

function doIt(data, opts) {
  return `${ data.charAt(0).toUpperCase() }${ data.substring(1) }`;
}

export const capitalize = (data, opts) => {
  return doIt(data, opts);
}

export const _capitalize = (el, value) => {
  const data = el.textContent;
  el.innerHTML = doIt(data, value);
}