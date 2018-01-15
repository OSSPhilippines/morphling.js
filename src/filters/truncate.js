'use strict';

export const truncate = (data) => {
  return `${ data.charAt(0).toUpperCase() }${ data.substring(1) }`;
}