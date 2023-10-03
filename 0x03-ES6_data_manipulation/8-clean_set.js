export default function cleanSet(set, startString) {
  const arr = [];

  for (const item of set) {
    if (item.startsWith(startString)) {
      arr.push(item.substring(startString.length));
    }
  }

  return arr.join('-');
}
