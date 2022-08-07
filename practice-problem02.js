/**
 * problem 1
 * একটি array দেয়া আছে।
 * প্রথমে Banana element এর index বের করতে হবে।
 * এবার Banana কে বাতিল করে Mango বসাতে হবে।
 * Array এর শেষ উপাদান Orange কে সরাতে হবে।
 * Orange কে সরিয়ে watermelon বসাতে হবে।
 */
// var fruits = ['Apple', 'Banana', 'Orange'];
// var bananaIndex = fruits.indexOf('Banana'); // fine index 
// console.log(bananaIndex);  // check index 
// fruits[1] = 'Mango'; // replace mango Banana with mango
// fruits.pop();            // remove last element of this array
// fruits.push('Watermelon'); // add Watermelon as a last element
// console.log(fruits); // final result

/**
 * problem 2
 * একটি নাম্বার grade program করতে হবে যেখানে ১০০ থেকে ৩৩ পর্যন্ত grading কাজ করবে। 
 */
// let marks = 32; // এখানে একজন ছাত্রের মার্ক ইনপুট দিতে হবে।
// if (marks >= 90) {
//     console.log('Golden A +');
// }
// else if (marks >= 80) {
//     console.log('You got A +');
// }
// else if (marks >= 70) {
//     console.log('You got A');
// }
// else if (marks >= 60) {
//     console.log('You got A-');
// }
// else if (marks >= 50) {
//     console.log('You got B');
// }
// else if (marks >= 40) {
//     console.log('You got C');
// }
// else if (marks >= 33) {
//     console.log('You got B');
// }
// else {
//     console.log('You are failled');
// }

/**
 * problem 3
 * একটি ত্রিভুজ এর ৩ বাহুর মাপ দেয়া আছে। বের করতে হবে যে যেকোনো ২ বাহু সমান কি না।
 */
// let a = 9;
// let b = 5;
// let c = 5;
// if(a === b){
//     console.log('a ar b Shoman');
// }
// else if(a === c){
//     console.log('a ar c shoman');
// }
// else if (b === c){
//     console.log(' b ar c shoman');
// }
// else{
//     console.log('Kono tai shoman noy.');
// }

// if( a === b || a == c || b == c){
//     console.log('Isosceles');
// }
// else {
//     console.log('404 not found');
// }

/**
 * Problem 4
 * ৩ টি সংখ্যা দেয়া আছে। আমাকে বের করতে হবে কোন সংখ্যা টা বড় 
 */
const x = 130;
const y = 79;
const z = 105;

if ( x > y){  
    console.log(x); // if x greater than y
}
else if(x > z){
    console.log(x); // if x greater than z
}
else if(y > z){
    console.log(y); // if y greater than z
}
else{
    console.log(z); // if z greater than x and y
}