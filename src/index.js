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
        const filter = name.split('.')[1];
        const func = `_${filter}`;
        filters[func](el, value);
      });
    } catch (e) {
      console.error('Morphling Error:', e);
      return;
    }
  });
})();