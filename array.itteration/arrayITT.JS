//1.  for in method
// let arr = [10,20,30,40,50,60]


// for ( let x in arr){
//     console.log(x);

// }

 //2. for of method 
// for (let y of arr){
//  console.log(y);
// }

//3. FOR EACH METHOD
//   let arr = [10,20,30,40,50] 

// arr.forEach(function(){
    // console.log(arr);
// })

// arr.forEach(function(element,index){
    // console.log(element,index);
// })

// arr.forEach(d=function(){
    // console.log("hello");
// }) 

//  NOTE : if we print or store inside the another variable or print it forcefully then it returns us aS UNDEFINED 
// THIS WAS THE MAJOR DIFFRENCE BETWEEN THE MAP AND FOR EACH
// let y = arr.forEach(function(element,index){
    // return element,index;
// })
// console.log(y);                                

// 4.  MAP METHOD
let arr = [10,55,20,30,40,50]

// let y =arr.map(function(element){
    // return element;
// 
// })
// console.log(y);

// 2nd way
let z =arr.map(function(element){
        console.log(element);
      return  element;
})
console.log(z);

// In this method the map will return the new array representation and print all t
// 
