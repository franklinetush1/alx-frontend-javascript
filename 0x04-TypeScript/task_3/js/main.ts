// main.ts

/// <reference path="./task_3/js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from 'crud.js';

// Create a row object with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert a new row and capture the generated RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row ${newRowID}`);
// Insert row 125

// Update the row with an age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

// Delete the row with the given RowID
CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);
// Delete row id 125
