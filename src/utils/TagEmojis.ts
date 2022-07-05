const tagEmojis = new Map();
tagEmojis.set('monkey', '🐒');
tagEmojis.set('finance', '💵');
tagEmojis.set('game', '👾');
tagEmojis.set('idea', '💡');
tagEmojis.set('design', '📐');
tagEmojis.set('sucks', '👎');
tagEmojis.set('hardware', '💻');
tagEmojis.set('weekly', '📆');
tagEmojis.set('links', '🔗');
tagEmojis.set('review', '🤔');

export function translateEmojis(words: Array<String>): string {
  let test: string = '';
  test = '';
  words.forEach((tag) => {
    if (tagEmojis.has(tag)) test += tagEmojis.get(tag);
  });
  return test;
}
