// function Person(personName,personAge){
// this.name = personName
// this.age  = personAge
// }
// let p1 = new Person("amit",25)
// let p2 = new Person("atul",23)


// console.log(p1);
// console.log(p2);


 //2nd -------------------//
//   function Student(sid,sname){
//      this.sid = sid;
//      this.sname= sname;

//   }
//    let s1 = new Student(1,"RAM")
//    let s2 = new Student(2,"RAJU");
//    let s3 = new Student(3,"SHYAM");
// console.log(s1);
// console.log(s2.sname);
// console.log(s3);
// console.log(s1.sid);

//SPREAD OPERATOR AND REST PARAMETER(...)
// 1st.spread operator_____ it unpacks  the value and spread them 
// let a = [10,20,30,40]
// let b = [50,60,70,80]
// // let c = [a,b]
// // let c = [...a,b]
// // let c = [a,...b]
// let c = [...a,...b]
// console.log(c);

// 2nd. REST PARAMETER using the function it packs the value  
 function x (a,b,c,...d)
{
    console.log(a,b,c,d);
}
x(40,50,60,70,80,90)

