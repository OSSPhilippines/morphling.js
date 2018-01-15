import htmlTags from './htmlTags';


export const getElements = () => {
  const els = [];
  htmlTags.forEach(tag => {
    if(tag === 'body') return;
    let el = document.getElementsByTagName(tag);
    if(!!+el.length)
      els.push(el);
  });
  return els;
}