//class example
console.log("class programs")
class person1{
age=40


get location(){
    return 'blr'
}

constructor(firstname1,lastname1){
    this.firstname1=firstname1;
    this.lastname1=lastname1;
}
fullname(){
console.log(this.firstname1+this.lastname1);
}

}
let per =new person1("hello","world");
console.log(per.age);
console.log(per.location)
console.log(per.fullname())
