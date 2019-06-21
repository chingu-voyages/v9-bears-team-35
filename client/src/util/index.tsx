export const upgrade = (text: string) =>
  text.replace(/dummy/gi, m => (m[0] === 'd' ? 'g' : 'G') + 'enius');
