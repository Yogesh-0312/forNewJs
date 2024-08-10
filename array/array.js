// 1. IT IS THE REPRESENTATION OF ARRAY IN WHICH  THE ELEMENTS ARE STORED.
// let arr =[10,20,30,40,50]
// console.log(arr);

// 2. WE CREATE ONE MORE ARRAY OF HETEROGENOUS TYPE AND STORED THE ELEMENTS..
// let arr = [10,'a',true,'a',undefined,25,'yes','b','javascript',false,null,20,18,14];
// console.log(arr);

// 3. (POP) METHOD IS USED TO DELETE THE LAST ELEMENTOF THE  ARRAY LIST  
// arr.pop();
// console.log(arr);

// 4.(PUSH) METHOD IS USED TO ADD THE ELEMENTS IN ARRAY FROM LAST  INDEX.
// arr.push('hiiii');
// console.log(arr);

// 5. (SHIFT) THIS METHOD IS USED TO DELETE THE FIRST ELEMENT OF THE ARRAY LIST.
// arr.shift();
// console.log(arr);

// 6.(UNSHIFT) THIS METHOD IS USED TO ADD THE FIRST INDEX ELEMENT IN THE ARRAY LIST
// arr.unshift('hey')
// console.log(arr);

// 7. (INCLUDES) THIS METHOD RETURNS THE BOOLEAN VALUE AND SPECIFIES THE ELEMENTS IS PRESENT IN THE ARRAY LIST OR NOT.
// let y = arr.includes(null);
// console.log(y);

// 8.(INDEXOF) THIS METHOD IS USED TO RETURN THE INDEX NO OF PARTICULAR ELEMENT WHIS IS PRESENT IN THE ARRAYLIST.
// let z = arr.indexOf()
// console.log(z);

// 9. (SPLICE METHOD) can affect the original array or we passsed the 3 arguments inside it .
// a.  IS START INDEX 
// b. IS DELETE COUNT .
// c. NO. OF ELEMENTS TO BE ADDED IN LIST 

// let arr= [10,20,30,40,50,60]
// arr.splice(2,3,'hi')
// console.log(arr);

//10. (SLICE METHOD) is not affected the original array list,then we need to store the array in another array variable 
//WHERE IT STARTS FROM THE GIVEN INDEX AND LAST INDEX IS IGNORED.
// let arr = [10,20,30,40,50,60]
// // let x = arr.slice(1,5); 
// // console.log(x);
// // let y = arr.slice(2,4)
// // console.log(y);
// // let arr1 = ['a','b','c','d','e']
// // let z =arr1.slice(2,4)
// // console.log(z);

// let arr = [10,20,30,40,50]
// let x = arr.slice(1,2)
// console.log(x);
  
// 11.CONCAT METHOD  IS USED TO ONE OR MORE ARRAYS INTO SINGLE ARRAY
// let a =[10,20,30,40] 
// let b = ['a','b','c','d']
// let c = ["hello","hii"]
// let arr = a.concat(b,c);
// console.log(arr);

//12.NESTED ARRAY is used print  array inside array and we also print the arrays particular elements
let a =[10,20,30,40] 
let b =['a','b','c','d']
let c = ["hello","hii"]
let arr =[a[3],b[2],c[2]]
console.log (arr);
























