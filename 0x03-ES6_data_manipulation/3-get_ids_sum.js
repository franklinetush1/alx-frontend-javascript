export default function getStudentIdsSum(arr) {
  const sum = arr.reduce((accumulator, student) => accumulator + student.id, 0);
  return sum;
}
