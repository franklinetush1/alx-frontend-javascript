export default function getStudentsByLocation(arr, city) {
  const filtered = arr.filter((cit) => cit.location === city);
  return filtered;
}
