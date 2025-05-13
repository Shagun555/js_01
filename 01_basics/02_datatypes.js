//"use strict" we use this to stictly use the advance version of js
//Data types in js
//We have two types primitives and reference types
//Primitives data type
 let name1= "Shagun";             //1.String – Textual data
let age = 21;                    //2.Number – Numeric values (integers or floats)
let isStudent = true;            //3.Boolean -True or false
let x;                          // 4.x is undefined
let y = null;                  //5. Standalone value
let bigNum = 1234567890123456789012345678901234567890;       //6.BigInt – Large integers
let sym = Symbol("id");          // 7.Symbol – Unique and immutable identifier (used mostly in objects)

console.table([name1,age,isStudent,x,y,bigNum,sym]);
//object or reference data types
//These can store collections of values and are mutable:

//1.Object – Key-value pairs
let person = { name: "Shagun", age: 21 };
console.log(person);
//2.Array – Ordered list
let colors = ["red", "blue", "green"];
console.log(colors);
//3.Function – Reusable block of code
function greet() {
  console.log("Hello!");
}
greet();


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack and Heap memory
//In case of primitives data types we use stack memory in which we pass the copy of variable 
//Example 
let hello="shagun";
let welcome=hello;
welcome="riya";
console.log(hello);
console.log(welcome);
//let welcome=hello; in this step we are not assigning any reference of variable hello to variable 
// welcome we are just making copy of variable hello So if we make any change in variable welcome that 
// will not effect the variable hello


//In case of non-primitives data types we use heap memory in which we pass the reference of variable 
//Example 
const userid={emailid:"shagun@gamil.com"};
const userid2=userid;
userid2.emailid="shagunpal@gamil.com";
console.log(userid.emailid);
console.log(userid2.emailid);
//here if make any changes to userid2 that will directly effect userid because in case of heap memory 
//we directly assign reference 
