
//1.filter
 
let num=[1,2,3,4,5,6,7,8,9,10];
let evenNum = num.filter((e)=> e % 2 === 0);
console.log(evenNum);
 
let employee = [
    {name:"john", age:60, gender:"female"},
    {name:"bob", age:30, gender:"male"},
    {name:"lisa", age:20, gender:"male"},
    {name:"priya", age:20, gender:"female"},
    {name:"riya", age:40, gender:"female"},
];
 
let femaleEmpOver30 = employee.filter((emp) => {
    return emp.gender == "male" && emp.age <= 30;
});
 
console.log(femaleEmpOver30);
 
 
//map
const numbers = [1 , 2 , 3 , 4 , 5];
 
const newNumbers = numbers.map((num) => {
    return num * 10
})
 
console.log(newNumbers);
 
let date=[2,8,6,7]
 
let newdate=date.map(dates=>dates*3)
console.log(newdate)
