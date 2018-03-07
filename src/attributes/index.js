
import invalidTags from './invalidTags';

function getElementAttrs(el) {
  return [].slice.call(el.attributes).map((attr) => {
    return {
      el,
      name: attr.name,
      value: attr.value
    }
  });
}

export const getMorphAttributes = () => {
  const elemsRaw = document.body.getElementsByTagName('*');
  const elemsArr = Array.prototype.slice.call(elemsRaw);
  let attributes = [];
  elemsArr.forEach(elem => {
    if(invalidTags.includes(elem.tagName)) return;
    attributes.push(getElementAttrs(elem));
  });
  return attributes;
}