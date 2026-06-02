// ==========================================
// 1. PRACTICE OUTPUTS (WORKING CODE)
// ==========================================

console.log("Hello Connection! This is my first JavaScript code.");
console.log("I am learning JavaScript and it's really fun!");

// Declaring variables properly using 'let'
let name = "Shuvo 1996";
console.log("My name is " + name + ".");

let x = null;
let y = undefined;
let myName = 42;

console.log("The value of x is: " + x);
console.log("The value of y is: " + y);
console.log("The value of myName is: " + myName);


// ==========================================
// 2. COMPLETE NOTES: VARIABLES IN JAVASCRIPT
// ==========================================

/*
  What is a Variable?
  A variable is a container for storing data values.

  --- Rules for Naming Variables (Identifiers) ---
  1. Names can contain letters, digits, underscores (_), and dollar signs ($).
  2. Names must begin with a letter, an underscore (_), or a dollar sign ($).
  3. Names cannot start with a number (e.g., '1name' is invalid, 'name1' is valid).
  4. Names are case-sensitive ('myName' and 'myname' are different variables).
  5. Reserved keywords (like 'let', 'const', 'var', 'if', 'for') cannot be used as names.
  6. Names should be descriptive (use 'age' instead of 'a', 'userName' instead of 'x').
  7. Names cannot contain spaces (use camelCase like 'userAge' instead of 'user age').
*/

/*
  --- Ways to Declare a Variable: var, let, and const ---
*/

// 1. var (Old way, Function-scoped, Hoisted)
// Avoid using 'var' in modern JavaScript because it can cause bugs.
function testVar() {
    // Hoisting: 'var' variables can be accessed before declaration (returns undefined, no error)
    console.log(a); // Output: undefined
    var a = 10;
    console.log(a); // Output: 10
}
testVar();

// 2. let (Modern way, Block-scoped, Re-assignable)
// Use 'let' when you know the value of the variable will change later.
function testLet() {
    let b = 20;
    b = 30; // Allowed: You can re-assign a 'let' variable
    console.log(b); // Output: 30
}
testLet();

// 3. const (Modern way, Block-scoped, Immutable/Constant)
// Use 'const' by default unless you are sure the value will change.
function testConst() {
    const c = 100;
    // c = 200; // NOT Allowed: This will throw a TypeError because const cannot be changed.
    console.log(c); // Output: 100
}
testConst();


// ==========================================
// 3. COMPLETE NOTES: DATA TYPES IN JAVASCRIPT
// ==========================================

/*
  JavaScript has two main categories of Data Types:
  A. Primitive Data Types (Stored directly by value)
  B. Non-Primitive/Reference Data Types (Stored by reference/objects)
*/

// ------------------------------------------
// A. PRIMITIVE DATA TYPES
// ------------------------------------------

// 1. String: Represents textual data
let text = "Hello World"; 
console.log("Type of text: " + typeof text); // "string"

// 2. Number: Represents both integer and floating-point numbers
let age = 28;
let pi = 3.1416;
console.log("Type of age: " + typeof age); // "number"

// 3. Boolean: Represents logical entity (true or false)
let isLearning = true;
console.log("Type of isLearning: " + typeof isLearning); // "boolean"

// 4. Null: Represents the intentional absence of any object value
let emptyValue = null;
// Note: typeof null returns "object" due to a historical bug in JavaScript, but it is a Primitive type.
console.log("Type of emptyValue: " + typeof emptyValue); 

// 5. Undefined: A variable that has been declared but not assigned a value
let missingValue;
console.log("Type of missingValue: " + typeof missingValue); // "undefined"

// 6. Symbol: Represents a unique and immutable identifier (Advanced)
let uniqueKey = Symbol("id");
console.log("Type of uniqueKey: " + typeof uniqueKey); // "symbol"

// 7. BigInt: Represents integers greater than the safe limit for Numbers
let hugeNumber = 9007199254740991n;
console.log("Type of hugeNumber: " + typeof hugeNumber); // "bigint"


// ------------------------------------------
// B. NON-PRIMITIVE (REFERENCE) DATA TYPES
// ------------------------------------------

// 1. Object: A collection of key-value pairs
let user = {
    firstName: "Shuvo",
    birthYear: 1996,
    age: 28,
    isStudent: false
};
user.age = 29; // Allowed: You can change properties of an object declared with 'const' 
console.log("User Object: ", user);
console.log("Type of user: " + typeof user); // "object"

// 2. Array: A list-like object used to store multiple values in a single variable
let programmingLanguages = ["JavaScript", "Python", "HTML", "CSS"];
console.log("Languages Array: ", programmingLanguages);
// Note: Arrays are technically objects in JavaScript
console.log("Type of programmingLanguages: " + typeof programmingLanguages); // "object"

// 3. Function: A block of code designed to perform a particular task
let greet = function() {
    return "Hello from the function!";
};
console.log(greet());
console.log("Type of greet: " + typeof greet); // "function"

// =========================================================================
// DETAILED NOTES: NON-PRIMITIVE / REFERENCE DATA TYPES
// =========================================================================

/*
  What are Non-Primitive (Reference) Data Types?
  -----------------------------------------------
  Primitive types (like Number, String) can store only a single value. 
  But Non-Primitive types allow us to store complex, structured, and 
  multiple values together under a single variable name.

  Why are they called "Reference" types?
  --------------------------------------
  They do not store the actual data directly in the variable. Instead, 
  the data is stored in the memory (Heap), and the variable only holds 
  the "Address" or "Reference" pointing to that memory location.
*/

// -------------------------------------------------------------------------
// 1. OBJECT (অবজেক্ট)
// -------------------------------------------------------------------------
/*
  - An Object represents a real-world entity with properties (characteristics).
  - It stores data in "Key-Value" pairs inside curly braces { }.
*/

let user2 = {
    firstName: "Shuvo",  // 'firstName' is the Key, "Shuvo" is the Value
    birthYear: 1996,     // 'birthYear' is the Key, 1996 is the Value
    isStudent: false     // 'isStudent' is the Key, false is the Value
};

console.log("User Object: ", user);
console.log("Type of user: " + typeof user); // Output: "object"


// -------------------------------------------------------------------------
// 2. ARRAY (অ্যারে)
// -------------------------------------------------------------------------
/*
  - An Array is used to store a "List" of multiple values in a single variable.
  - It is written inside square brackets [ ] and values are separated by commas.
  
  *CRITICAL NOTE:* If you check 'typeof programmingLanguages', it returns "object". 
  In JavaScript, Arrays are technically a special type of Object 
  where keys are automatically assigned as numbers/indexes (0, 1, 2, 3...).
*/

let programmingLanguages2 = ["JavaScript", "Python", "HTML", "CSS"];

console.log("Languages Array: ", programmingLanguages);
console.log("Type of programmingLanguages: " + typeof programmingLanguages); // Output: "object"


// -------------------------------------------------------------------------
// 3. FUNCTION (ফাংশন)
// -------------------------------------------------------------------------
/*
  - A Function is a block of code designed to perform a specific task.
  - It allows us to write code once and reuse it multiple times by "calling" it.
  
  *NOTE:* Functions are also objects under the hood in JavaScript, but 'typeof' 
  explicitly returns "function" to make it easier for developers to identify.
*/

// Creating a function and storing it in a variable (Function Expression)
let greet2 = function() {
    return "Hello from the function!";
};

// Calling or executing the function using parenthesis ()
console.log(greet()); 
console.log("Type of greet: " + typeof greet); // Output: "function"

// =========================================================================
// END OF NON-PRIMITIVE DATA TYPES SECTION
// =========================================================================

// =========================================================================
// NEW TOPIC: OPERATORS IN JAVASCRIPT
// =========================================================================

/*
  What is an Operator?
  --------------------
  An operator is a special symbol used to perform operations on values and variables.
  The values we perform operations on are called "Operands".
  Example: In (10 + 5), '+' is the Operator, and '10' and '5' are Operands.

  Main Types of Operators in JavaScript:
  1. Arithmetic Operators
  2. Assignment Operators
  3. Comparison Operators
  4. Logical Operators
*/

// -------------------------------------------------------------------------
// 1. ARITHMETIC OPERATORS (গাণিতিক অপারেটর)
// -------------------------------------------------------------------------
/* Used to perform basic mathematical calculations. */

console.log("--- 1. Arithmetic Operators ---");

let a = 10;
let b = 3;

console.log("Addition (a + b):", a + b);         // Output: 13
console.log("Subtraction (a - b):", a - b);      // Output: 7
console.log("Multiplication (a * b):", a * b);   // Output: 30
console.log("Division (a / b):", a / b);         // Output: 3.3333...
console.log("Remainder/Modulus (a % b):", a % b); // Output: 1 (ভাগশেষ)
console.log("Exponentiation (a ** b):", a ** b); // Output: 1000 (10 এর পাওয়ার 3)

// Increment (++) and Decrement (--)
let count = 5;
count++; // count = count + 1
console.log("Increment (count++):", count);      // Output: 6

let steps = 5;
steps--; // steps = steps - 1
console.log("Decrement (steps--):", steps);      // Output: 4


// -------------------------------------------------------------------------
// 2. ASSIGNMENT OPERATORS (অ্যাসাইনমেন্ট অপারেটর)
// -------------------------------------------------------------------------
/* Used to assign values to variables. Shortcuts can combine math operations. */

console.log("\n--- 2. Assignment Operators ---");

let x2 = 10; // '=' assigns 10 to x
console.log("Basic Assignment (x = 10):", x2); // Output: 10    

x2 += 5;     // Same as: x = x + 5
console.log("Add and Assign (x += 5):", x2);      // Output: 15

x2 -= 3;     // Same as: x = x - 3
console.log("Subtract and Assign (x -= 3):", x2); // Output: 12

x2 *= 2;     // Same as: x = x * 2
console.log("Multiply and Assign (x *= 2):", x2); // Output: 24


// -------------------------------------------------------------------------
// 3. COMPARISON OPERATORS (তুলনামূলক অপারেটর)
// -------------------------------------------------------------------------
/* Used to compare two values. It always returns a Boolean value (true or false). */

console.log("\n--- 3. Comparison Operators ---");

let num1 = 5;
let num2 = "5"; // String type

// Equal to (==) -> Checks value only, ignores data type
console.log("Loose Equality (5 == '5'):", num1 == num2);  // Output: true

// Strict Equal to (===) -> Checks BOTH value and data type (Best Practice!)
console.log("Strict Equality (5 === '5'):", num1 === num2); // Output: false (Because Number !== String)

// Not Equal to
console.log("Loose Inequality (5 != 10):", num1 != 10);    // Output: true
console.log("Strict Inequality (5 !== '5'):", num1 !== num2); // Output: true

// Greater than and Less than
let p = 15;
let q = 20;
console.log("Is p greater than q? (p > q):", p > q);   // Output: false
console.log("Is p less than q? (p < q):", p < q);      // Output: true
console.log("Is q greater or equal? (q >= 20):", q >= 20); // Output: true


// -------------------------------------------------------------------------
// 4. LOGICAL OPERATORS (যৌক্তিক অপারেটর)
// -------------------------------------------------------------------------
/* Used to combine multiple conditions or determine logic between variables. */

console.log("\n--- 4. Logical Operators ---");

let hasLicense = true;
let isSober = false;

// A. Logical AND (&&) -> Returns true ONLY if all conditions are true
console.log("Can drive? (AND - &&):", hasLicense && isSober); // Output: false

// B. Logical OR (||) -> Returns true if AT LEAST ONE condition is true
console.log("Can pass? (OR - ||):", hasLicense || isSober);   // Output: true

// C. Logical NOT (!) -> Reverses the boolean value (true becomes false, and vice-versa)
let isRainy = true;
console.log("Is it NOT rainy? (NOT - !):", !isRainy);         // Output: false


// =========================================================================
// DEEP DIVE: JAVASCRIPT OPERATORS WITH DETAILED EXAMPLES
// =========================================================================

// -------------------------------------------------------------------------
// 1. ARITHMETIC OPERATORS (গাণিতিক অপারেটর)
// -------------------------------------------------------------------------
console.log("--- 1. DEEP DIVE: ARITHMETIC OPERATORS ---");

let m = 13;
let n = 4;

console.log("Addition (+):", m + n);       // 17
console.log("Subtraction (-):", m - n);    // 9
console.log("Multiplication (*):", m * n); // 52
console.log("Division (/):", m / n);       // 3.25

// Modulus (%): এটি ভাগফল দেয় না, শুধু ভাগশেষ (Remainder) দেয়।
// ১৩ কে ৪ দিয়ে ভাগ করলে ৩ চারং ১২, অবশিষ্ট থাকে ১।
console.log("Modulus (%):", m % n);        // Output: 1

// Exponentiation (**): প্রথম সংখ্যার পাওয়ার বা ঘাত হিসেবে দ্বিতীয় সংখ্যাটি বসে।
// ২ এর পাওয়ার ৩ (২ * ২ * ২) = ৮।
console.log("Exponentiation (2 ** 3):", 2 ** 3); // Output: 8


/* --- CRITICAL CONCEPT: Pre vs Post Increment/Decrement ---
  ++ (Increment) ১ যোগ করে, -- (Decrement) ১ বিয়োগ করে। 
  কিন্তু এরা ভেরিয়েবলের আগে বা পরে বসার ওপর ভিত্তি করে দুইভাবে কাজ করে:
*/

// A. POST-Increment (x++) -> "আগে ব্যবহার, পরে পরিবর্তন"
let xPost = 5;
console.log("Post-Increment in console:", xPost++); // Output: 5 (কনসোলে ৫ ই দেখাবে, কারণ প্রিন্ট আগে হয়েছে)
console.log("Value after Post-Increment:", xPost);   // Output: 6 (পরের লাইনে এসে মান ৬ হয়েছে)

// B. PRE-Increment (++x) -> "আগে পরিবর্তন, পরে ব্যবহার"
let xPre = 5;
console.log("Pre-Increment in console:", ++xPre);   // Output: 6 (লাইনেই মান ১ বেড়ে ৬ হয়ে প্রিন্ট হয়েছে)

// C. POST-Decrement (y--) ও PRE-Decrement (--y) একই নিয়মে কাজ করে:
let yPost = 5;
console.log("Post-Decrement:", yPost--); // Output: 5
let yPre = 5;
console.log("Pre-Decrement:", --yPre);   // Output: 4


// -------------------------------------------------------------------------
// 2. ASSIGNMENT OPERATORS (মান নির্ধারণী অপারেটর)
// -------------------------------------------------------------------------
console.log("\n--- 2. DEEP DIVE: ASSIGNMENT OPERATORS ---");

let num = 10; // '=' দিয়ে ডানপাশের মান বামপাশের ভেরিয়েবলে রাখা হয়।

num += 5;   // num = num + 5 -> (10 + 5) = 15
console.log("After += :", num); 

num -= 3;   // num = num - 3 -> (15 - 3) = 12
console.log("After -= :", num);

num *= 2;   // num = num * 2 -> (12 * 2) = 24
console.log("After *= :", num);

num %= 5;   // num = num % 5 -> (24 % 5) = ৪ (ভাগশেষ)
console.log("After %= :", num); // Output: 4

let base = 2;
base **= 3; // base = base ** 3 -> (২ এর পাওয়ার ৩) = ৮
console.log("After **= :", base); // Output: 8


// -------------------------------------------------------------------------
// 3. COMPARISON OPERATORS (তুলনামূলক অপারেটর)
// -------------------------------------------------------------------------
console.log("\n--- 3. DEEP DIVE: COMPARISON OPERATORS ---");

/*
  Loose Equality (==) vs Strict Equality (===)
  --------------------------------------------
  '==' শুধু মান (Value) চেক করে। ডাটা টাইপ আলাদা হলেও সে জোর করে রূপান্তর (Type Coercion) করে মেলায়।
  '===' মান (Value) এবং ডাটা টাইপ (Data Type) দুটিই কঠোরভাবে চেক করে। 
*/

let value1 = 7;
let value2 = "7";

console.log("Loose Equal (7 == '7'):", value1 == value2);   // true (কারণ দুজনের মানই সাত)
console.log("Strict Equal (7 === '7'):", value1 === value2); // false (কারণ একটি Number, আরেকটি String)

console.log("Loose Not Equal (7 != '7'):", value1 != value2);   // false (তারা সমান নয় - এই দাবিটি মিথ্যা)
console.log("Strict Not Equal (7 !== '7'):", value1 !== value2); // true (তারা সত্যি একে অপরের থেকে আলাদা)

// Relational Operators (ছোট বা বড় তুলনা)
let age1 = 25;
let age2 = 18;

console.log("Greater than (25 > 18):", age1 > age2);   // true
console.log("Less than (25 < 18):", age1 < age2);      // false
console.log("Greater or Equal (25 >= 25):", age1 >= 25); // true (বড় না হলেও সমান, তাই true)
console.log("Less or Equal (18 <= 15):", age2 <= 15);    // false


// -------------------------------------------------------------------------
// 4. LOGICAL OPERATORS (যৌক্তিক অপারেটর)
// -------------------------------------------------------------------------
console.log("\n--- 4. DEEP DIVE: LOGICAL OPERATORS ---");

/*
  && (AND): সব শর্ত সত্য (true) হতে হবে। একটিও মিথ্যা (false) হলে পুরোটা false।
  || (OR): যেকোনো একটা শর্ত সত্য (true) হলেই পুরোটা true।
  ! (NOT): সত্যকে মিথ্যা এবং মিথ্যাকে সত্য বানায়।
*/

let highIncome = true;
let goodCreditScore = false;
let cleanRecord = true;

// AND (&&) এর উদাহরণ:
// লোন পেতে হলে ইনকামও ভালো হতে হবে এবং ক্রেডিট স্কোরও ভালো হতে হবে।
let loanApproved = highIncome && goodCreditScore;
console.log("Loan Approved (AND):", loanApproved); // false (যেহেতু ক্রেডিট স্কোর ভালো নয়)

// OR (||) এর উদাহরণ:
// চাকরিতে সুযোগ পেতে ইনকাম ভালো অথবা রেকর্ড ক্লিন—যেকোনো একটা থাকলেই হবে।
let jobEligible = highIncome || goodCreditScore;
console.log("Job Eligible (OR):", jobEligible);   // true (ইনকাম ভালো থাকায় সে সুযোগ পাচ্ছে)

// NOT (!) এর উদাহরণ:
console.log("Opposite of highIncome (!true):", !highIncome); // false

// একাধিক অপারেটর একসাথে ব্যবহার:
let complexLogic = (highIncome || goodCreditScore) && cleanRecord;
console.log("Complex Logic Result:", complexLogic); // true

// =========================================================================
// END OF OPERATORS SECTION
// =========================================================================







// =========================================================================
// NEW TOPIC: CONDITIONAL STATEMENTS IN JAVASCRIPT
// =========================================================================

/*
  What is a Conditional Statement?
  --------------------------------
  Conditional statements are used to perform different actions based on different conditions.
  If a condition is true, one block of code runs. If it's false, another block can run.

  Types of Conditional Statements:
  1. if Statement
  2. if-else Statement
  3. else-if Ladder (Multiple conditions)
  4. switch Statement
*/

// -------------------------------------------------------------------------
// 1. IF STATEMENT (একক শর্ত)
// -------------------------------------------------------------------------
/* 'if' ব্লক তখনই কাজ করবে যখন ভেতরের শর্তটি শতভাগ সত্য (true) হবে। */

console.log("--- 1. if Statement ---");

let temperature = 35;

if (temperature > 30) {
    console.log("It's a hot day! Drink plenty of water.");
}


// -------------------------------------------------------------------------
// 2. IF-ELSE STATEMENT (যদি-নাহলে)
// -------------------------------------------------------------------------
/* শর্ত সত্য হলে 'if' এর ভেতরের কোড চলবে, আর মিথ্যা হলে 'else' এর কোড চলবে। */

console.log("\n--- 2. if-else Statement ---");

let age3 = 16;

if (age3 >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are too young to vote."); // This will run because 16 is less than 18
}


// -------------------------------------------------------------------------
// 3. ELSE-IF LADDER (একাধিক শর্ত চেক করা)
// -------------------------------------------------------------------------
/* যখন আপনার কাছে অনেকগুলো শর্ত থাকবে এবং যেকোনো একটিকে বেছে নিতে হবে। */

console.log("\n--- 3. else-if Ladder ---");

let score = 75;

if (score >= 80) {
    console.log("Grade: A+");
} else if (score >= 70) {
    console.log("Grade: A"); // This will run because 75 is >= 70
} else if (score >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: F"); // উপরের কোনো শর্ত না মিললে এটি চলতো
}


// -------------------------------------------------------------------------
// 4. SWITCH STATEMENT (নির্দিষ্ট মান ম্যাচ করা)
// -------------------------------------------------------------------------
/* যখন একটি মাত্র ভেরিয়েবলের মানের ওপর ভিত্তি করে অনেকগুলো 'case' বা অপশন চেক করতে হয়।
   এটি 'else-if' এর চেয়ে অনেক বেশি গোছানো দেখায়। */

console.log("\n--- 4. switch Statement ---");

let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Saturday";
        break;
    case 2:
        dayName = "Sunday";
        break;
    case 3:
        dayName = "Monday"; // This case matches!
        break; // break না দিলে নিচের কোডগুলোও রান হয়ে যেত (Fall-through)
    case 4:
        dayName = "Tuesday";
        break;
    case 5:
        dayName = "Wednesday";
        break;
    case 6:
        dayName = "Thursday";
        break;
    case 7:
        dayName = "Friday";
        break;
    default:
        dayName = "Invalid Day Number"; // কোনো কেস না মিললে এটি কাজ করবে
}

console.log("Today is:", dayName); // Output: Monday


// -------------------------------------------------------------------------
// BONUS: TERNARY OPERATOR (Short-hand if-else)
// -------------------------------------------------------------------------
/* if-else কে এক লাইনে লেখার একটি চমৎকার ও আধুনিক উপায়। 
   Syntax: condition ? expressionIfTrue : expressionIfFalse; */

console.log("\n--- Bonus: Ternary Operator ---");

let isRainy2 = true;
let takeUmbrella = isRainy2 ? "Yes, take it!" : "No need.";

console.log("Should I take an umbrella?", takeUmbrella); // Output: Yes, take it!