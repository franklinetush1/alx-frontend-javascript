import getListStudents from "./0-get_list_students.js";

export default function getListStudentIds(arr){
		if (typeof(arr) !== "object"){
			return [];
		}
		const newarr = arr.map((index)=> arr.indexOf(index));
		return newarr;
	}
