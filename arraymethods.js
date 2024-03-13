//1.push
var marks=[20,50,70,90];
marks.push(100,45);
console.log(marks);
 
//2.pop (removes the last element)
var lang=["java","html","css"];
lang.pop();
console.log(lang);
 
//3.shift (removes the 1st element )
let fruits=["apple","banana","mango"];
fruits.shift();
console.log(fruits);
 
//4.unshift (adds 1 or more element in the beginning)
let colors=["red","black","orange"];
colors.unshift("blue","pink");
console.log(colors);
console.log(colors.length);
 
//5.splice (allow you to add and remove element using index)
let animals=["dog","cat","rat","cow"];
animals.splice(1,3,'deer','bear','lion');
            //(index,no of elements to be removed & added,values)
console.log(animals);
 
//6.slice  
let numbers =[1,2,3,4,5];
let num=numbers.slice(1,4); //removes the elements of mentioned index
console.log(num);//1,4 => 1incude 4index excludeq
 
//7.concat
let fr=["apple","banana","mango"];
let no=[1,2,3,4,5];
let mix=fr.concat(no);
console.log(mix);
 
//8.indexOf
let pets=["dog","cat","rat","dog"];
let petsIndex=pets.indexOf("rat");
console.log(petsIndex);
let nameIndex=pets.indexOf("arya");
console.log(nameIndex);
// 2nd index
let secondIndex=pets.indexOf("dog",pets.indexOf("dog")+1);  //best practice
console.log(secondIndex);
// let secondIndex=pets.indexOf("dog",2);
// console.log(secondIndex);
 
//9.includes (gives the boolean value)
let test=["seller","vendor","admin","customer"];
let flag=test.includes("seller","arya");
console.log(flag);
 
//10.foreach
let n=[1,2,3,4];
n.forEach((e)=>{ //e indicates all the elements
    console.log(e);
    //console.log(e * 2);
})