import text from './data';

export const getParagraph = () => {
  const randomIndex = Math.floor(Math.random() * text.length);
  return text[randomIndex];
};

export const createParagraphs = (count) => {
  const newParagraphs = [];
  for (let i = 0; i < count; i++) {
    newParagraphs.push(getParagraph());
  }
  return newParagraphs;
};
