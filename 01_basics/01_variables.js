//const
const Name="shagun";
console.log(Name);
//name="riya"; 
// In case of const i cannot redeclare the variable
// In case of const i cannot reinitialize the variable
// Block-scoped
// Must be initialized at declaration                                                                                                                                             
// const name;
//name="riya"; 
// this is also wrong

// var 
var name2="shagun";
console.log(name2);
 var name2="riya"; // allowed but not allowed in case of let and const 
console.log(name2);
// Can be re-declared and updated
// Gets hoisted (moves to the top of the function or global scope)

//let
let name3="naman";
console.log(name3);
name3="shagun";
console.log(name3);
// Block-scoped (inside { })
// Can be updated but not re-declared in the same scope
// Also hoisted, but not initialized (you get an error if accessed before declaration)

// there is a shortcut to console multiple statements at one go
console.table([name2,name3]);
// at the end there is a conclusion dont use var in any case