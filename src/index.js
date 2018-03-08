export * from './filters';
import * as filters from './filters';
import {
  getMorphAttributes
} from './attributes';

(() => {
  const elemAttrs = getMorphAttributes();
  elemAttrs.forEach(elemAttr => {
    try {
      elemAttr.forEach(attr => {
        const {el, name, value} = attr;
        let filter = name.split('.')[1];

        // Convert kebab-case to camelCase
        filter = filter.replace(/-\w/g, (m) => {
          return m[1].toUpperCase();
        });

        const func = `_${filter}`;
        filters[func](el, value);
      });
    } catch (e) {
      console.error('Morphling Error:', e);
      return;
    }
  });
})();