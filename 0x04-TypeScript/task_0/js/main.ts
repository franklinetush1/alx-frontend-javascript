// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects and store them in an array named studentsList
  const student1: Student = {
    firstName: "Jack",
    lastName: "Sparrow",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Mathew",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Function to create the table and append rows for each student
  function createStudentTable() {
    const table = document.createElement("table");
    table.id = "studentTable";
  
    // Create table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const firstNameHeader = document.createElement("th");
    firstNameHeader.textContent = "First Name";
    const locationHeader = document.createElement("th");
    locationHeader.textContent = "Location";
  
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    thead.appendChild(headerRow);
  
    // Create table body and append rows
    const tbody = document.createElement("tbody");
    studentsList.forEach((student) => {
      const row = document.createElement("tr");
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = student.firstName;
      const locationCell = document.createElement("td");
      locationCell.textContent = student.location;
  
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      tbody.appendChild(row);
    });
  
    // Append the header and body to the table
    table.appendChild(thead);
    table.appendChild(tbody);
  
    // Append the table to the document body
    document.body.appendChild(table);
  }
  
  // Call the function to create the table
  createStudentTable();
  
