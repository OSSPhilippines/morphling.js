'use strict';

export const capitalize = (data) => {
  return `${ data.charAt(0).toUpperCase() }${ data.substring(1) }`;
}