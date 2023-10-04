interface Teacher = {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Index signature to allow any other attributes
};

// Create a Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Dynamically added attribute
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

// Create an object using the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


// Define an interface for the constructor parameters
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Define an interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class Student implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
