export default function iterateThroughObject(reportWithIterator) {
  const Names = [];
  for (const item of reportWithIterator) {
    Names.push(item);
  }
  return Names.join(' | ');
}
