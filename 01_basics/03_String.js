//In JavaScript, a string is a sequence of characters used to represent text.
//  Strings are one of the primitive data types in JavaScript.
// Declare a string using double quotes
let name = "Shagun";

// Declare a string using single quotes
let greeting = 'Hello';

// Use template literals to combine strings and include variables
// used in string interpolation
let message = `${greeting}, ${name}! Welcome to JavaScript.`;

// Output the full message
console.log(message);  // Hello, Shagun! Welcome to JavaScript.

// Get the length of the message
console.log("Length:", message.length);  // Total number of characters

// Convert the message to uppercase
console.log("Uppercase:", message.toUpperCase());

// Convert the message to lowercase
console.log("Lowercase:", message.toLowerCase());

// Check if the message contains the word "JavaScript"
console.log("Includes 'JavaScript'? :", message.includes("JavaScript"));  // true

// Find the position of the word "Shagun"
console.log("Index of 'Shagun':", message.indexOf("Shagun"));  // Returns the index

// Extract a portion of the string (slice)
let sliced = message.slice(7, 13);  // Extracts "Shagun"
console.log("Sliced part:", sliced);

// Replace a word in the string
let newMessage = message.replace("JavaScript", "the world of coding");
console.log("Replaced message:", newMessage);

// Trim spaces from a string
let spacedString = "   Learn JS with Shagun   ";
console.log("Trimmed:", spacedString.trim());

// Split the message into an array of words
let words = message.split(" ");
console.log("Words array:", words);

// Get a specific character from the string
console.log("Character at position 1:", name.charAt(1));  // 'h'
