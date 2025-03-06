const obj = new Object();


// const obj1 = {};
// console.log(obj1);


obj.employe = {
    emp_id: 1234,
    personalInfo : {
        firstName: "Shree",
        lastName: "Bhat",
        userName: "shree_bhat"
    }
}
console.log(obj);

console.log(obj.employe.personalInfo.firstName);


// combining 2 Objects

// assign operator

const obj1 = { 1: "abc", 2:"qwe"}
const obj2 = {3:"rty" ,4:"ghj"}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

// spread operator
const obj4 = {...obj1,...obj2,...obj3}
console.log("Objj 4: ",obj4);


console.log(Object.values(obj4));
console.log(Object.keys(obj));


console.log(Object.entries(obj));



console.log(obj.employe.personalInfo.hasOwnProperty("firstNae"));
console.log(Object.toString(obj));


const course = {
    courseName: "Javascript",
    price: "999",
    courseInstructor: "Adolf"
}

//destrcuturing 

const {courseName:cour} = course;
console.log(cour);

