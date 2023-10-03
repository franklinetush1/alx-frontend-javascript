import getListStudents from './0-get_list_students.js';

export default function getStudentsByLocation(arr, city) {
  const filtered = arr.filter((cit) => cit.location === city);
  return filtered;
}
