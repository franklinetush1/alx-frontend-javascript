export default function createEmployeesObject(departmentName, employees) {
  const newEmployee = {
    [departmentName]: employees,
  };

  return newEmployee;
}
