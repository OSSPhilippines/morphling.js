export * from './filters';
import * as filters from './filters';
import { getElements } from './tags';

(() => {
  window.addEventListener('load', () => {
    const els = getElements();
    els.forEach(el => {
      for (let e of el) {
        var morph = e.getAttribute('morph');
        var text = e.innerHTML;
        
        console.log(morph, text)
        if(morph && morph.match(/\=/gi)) {
          console.log(morph.split('='))
          morph = morph.split('=')[0];
        }
        console.log(morph)
        e.innerHTML = filters[morph](text);
        
      }
    })
  });
})();