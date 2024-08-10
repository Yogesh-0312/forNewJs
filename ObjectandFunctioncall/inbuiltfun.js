// let person1 = {
//           name : " yogesh mishra",
//           age : 22,
//           skills : ["math","science","react00","01"]
//         }

// let person2 = {
//                   name : " yogesh mishra",
//                   age : 25,
//                   skills : ["java","sql","jdbc","01"]
//                 }

//  function greet(a,b){
//     console.log(this.name);
//     console.log(this,a,b);
//  }
//   greet.call(person1,10,20)
//   greet.call(person2,30,40)

//   greet.apply(person1,[10,20])
//   greet.apply(person2,[30,40])


// 2. BIND function  METHOD 
// important for IV ..[CALL || APPLY ||  BIND]
let emp1 = {
    name :"amit",
    age : 25
}

function x (a,b,c){
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
    return "bye";
}
let y = x.bind(emp1);
// y(10,20,30)
y()
// x()