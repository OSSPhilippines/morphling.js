'use strict';
import { format } from 'date-fns';

function doIt(date, _format) {
  return format(date, _format);
}

export const dateFormat = (date, _format) => {
  return doIt(date, _format);
}

export const _dateFormat = (el, _format) => {
  const data = el.textContent;
  el.innerHTML = doIt(data, _format);
}