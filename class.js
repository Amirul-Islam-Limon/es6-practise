class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.college = "Notre Dame College";
    }
}

const amirul = new Student(01, "Amirul Islam");
const soikot = new Student(02, "Soikat Kanti");
const tamim = new Student(03, "Iftekhar Mahbub");

const college = amirul.college 
console.log(college);

console.log(soikot.id);