'use strict';

function doIt(data, opts) {
  const replacee = opts.split(':')[0];
  const replacer = opts.split(':')[1];
  const re = new RegExp(replacee, 'ig');
  return data.replace(re, replacer);
}

export const replace = (data, opts) => {
  return doIt(data, opts);
}

export const _replace = (el, value) => {
  const data = el.textContent;
  el.innerHTML = doIt(data, value);
}