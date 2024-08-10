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
// function x (a,b,c,...d)
// {
//     console.log(a,b,c,d);
// }
// x(40,50,60,70,80,90)
  

//SPREAD OPERATOR INSIDE THE OBJECTS AS WELL

// let person = {
//     name : 'amit',
//     age : 25
// }
// let employee = {
//     empid : 123,
//     empdesignation : "sde",
//     ...person
// }
//  console.log(employee);



// SOME IMPORTANT functions of java script---

//  let nums = [10, 20, -10, 99, 100, 15 ,25 ,90];
//  console.log(nums);
//  console.log(...nums);
 
//  let maxvalue = Math.max(...nums)
//  console.log(maxvalue);

// let minvalue = Math.min(...nums);
// console.log(minvalue);

// let x = Math.round(10.6);
// console.log(x);


// let y = Math.ceil(10.4);
// console.log(y);


// let  z = Math.floor(10.6);
// console.log(z);

// // let b = math.random()
// let b = Math.round(Math.random()*4563)
// console.log(b);
 

// ***(== will only check the values .. but [===] will check the values as well as the data types)**
// let a  = 10;
// let b = "10";
// console.log(a==b);
// console.log(a===b);


// SOME METHODS OF OBJECT which returnS the ARRAY  

// let person = {
//       name : " yogesh mishra",
//       age : 25,
//       skills : ["java","sql","jdbc","01"]
//     }
//     // console.log(person);
// let keys = Object.keys(person);
// console.log(keys);

// let values = Object.values(person);
// console.log(values);

//  let entries = Object.entries(person );
//  console.log(entries );

//
let person = {
          name : " yogesh mishra",
          age : 25,
          skills : ["java","sql","jdbc","01"]
        }




 