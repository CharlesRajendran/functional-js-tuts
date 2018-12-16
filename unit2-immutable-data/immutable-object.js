const baseStudentObj = {
    name:"Charles",
    age:25
}

// Adding properties to objects using spread operator
const studentWithCampus = {
    ...baseStudentObj,
    campus: "UOM"
}

// Updating properties to objects, override the property
const updatedStudentObject = {
    ...studentWithCampus,
    name: "Charles Dilip"
}

// Delete properties in objects using rest operator
const {age, ...removeAgeStudentObj} = updatedStudentObject;