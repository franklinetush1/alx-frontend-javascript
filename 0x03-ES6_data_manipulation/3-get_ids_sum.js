import getListStudents from "./0-get_list_students.js";

export default function getStudentIdsSum (arr){
		const sum = arr.reduce((accumilator, student) => 
			accumilator + student.id
		, 0)
		return sum
	}
