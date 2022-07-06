// TODO: what's the best way to code these lists?
const tagEmojis = new Map([
  ['monkey', '🐒'],
  ['finance', '💵'],
  ['game', '👾'],
  ['idea', '💡'],
  ['design', '📐'],
  ['sucks', '👎'],
  ['hardware', '💻'],
  ['weekly', '📆'],
  ['links', '🔗'],
  ['review', '🤔'],
]);

/*
const tagDesc = new Map([
  ['monkey', 'Amazing Monkey Content'],
  ['finance', '"This is not financial advice."'],
  ['game', 'Video Games'],
  ['idea', 'Bright Idea'],
  ['design', 'Design Related'],
  ['sucks', 'This SUCKS!'],
  ['hardware', 'Hardware Related'],
  ['weekly', 'Weekly Post'],
  ['links', 'Cool Links'],
  ['review', 'Review'],
]);
*/

export function translateEmojis(words: Array<string>): string {
  let emojis: string = '';

  words.forEach((tag) => {
    if (tagEmojis.has(tag)) emojis += tagEmojis.get(tag);
  });

  return emojis;
}
