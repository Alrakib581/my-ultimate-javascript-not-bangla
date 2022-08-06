/**
 * আমরা চাইলে javascript  এ numaric বা নাম্বার variable কে যোগ , বিয়োগ , গুন, ভাগ করতে পারি।
 * তবে আমরা চাইলে কোন string variable কে সুধু যোগ করতে পারি। আর এই কাজকে string concatination বলে। নিচে কিছু উদাহরণ  দেখা যাক।
 */
var firstName = 'Jalaludding Mohammad';
var lastName = 'Akbor';          // এখানে সুধু ২ টা স্ট্রিং যোগ করা হয়েছে।
var fullName = firstName + lastName;
console.log(fullName);

let firstNam = 'Johiruddin Mohammad';
let lastNam = 'Babor';               // এখানে ৩ টা স্ট্রিং যোগ করা হয়েছে , ২ টার মধ্যে লেখা থাকলেও  অন্যটা ফাকা স্ট্রিং । তার মানে ডবল বা সিংগেল কোটেশন এর মধ্যে যদি কিছু থাকে সেটা স্ট্রিং আর যদি কিছু না থাকে সেটাও এমটি বা ফাকা স্ট্রিং।
let fullNam = firstNam + ' ' + lastNam; 
console.log(fullNam);

/**
 * যদি কোন সংখ্যা  ও স্ট্রিং কে একসাথে যোগ করা হয় তাহলে পুরোটাই স্ট্রিং হয়ে যায়। নিচে উদাহরণ দেখা যাক।
 */

let age = 25;
let money = ' 500 Taka';
let concat = age + money; // এখানে স্ট্রিং আর নাম্বার যোগ করার ফলে সব স্ট্রিং হয়ে গেছে।
console.log(concat);

/**
 * যদি কখন ও কোন পূর্ণ সংখ্যা স্ট্রিং হয়ে যায়। তাহলে তাকে নাম্বারে কনভার্ট করার উপায়।
 */

let rakibAge = 25;
let rakibMoney = '5000';   // এখানে নাম্বার থেকে স্ট্রিং হয়ে যাওয়া একটি সংখ্যাকে আবার parseInt(); ব্যাবহার করে নাম্বারে কনভার্ট করা হয়েছে।
   rakibMoney = parseInt(rakibMoney);
   console.log(rakibMoney);

let mark1 = '80.5034';
let mark2 = 55.47;       // এখানে নাম্বার থেকে স্ট্রিং হয়ে যাওয়া একটি দশমিক  সংখ্যাকে আবার parseFloat(); ব্যাবহার করে নাম্বারে কনভার্ট করা হয়েছে।
   mark1 = parseFloat(mark1);
console.log(mark1);