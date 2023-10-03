export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  
  const result = Array.from(set).reduce((acc, value) => {
    if (value.startsWith(startString)) {
      acc.push(value.substring(startString.length));
    }
    return acc;
  }, []).join('-');
  
  return result;
}
