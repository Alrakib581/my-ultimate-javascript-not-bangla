/**
 * Rakib's mom gave him some money and asked him to buy some orange and apples. Write a program to help Rakib calculate how much money the shopkeepaer will return.
 * দেওয়া আছে - total taka = 1000;
 *              orange prcie = 400 taka;
 *              Apple price = 300 taka
 */
let totalMoney = 1000; // মোট টাকা 
let orangePrice = 400; // কমলার দাম
let applePrice = 300; // আপেলের দাম
let totalPrice = orangePrice + applePrice; // কমলা আর আপেলের দামের যোগফল 
let returnPrice = totalMoney - totalPrice; // মোট টাকা থেকে আপেল আর কমলার দাম বাদ দিলাম।
console.log(returnPrice); // তাহলেই আমার কাছে কেনাকাটা করার পরে আর কত থাকলো তা জানা গেলো।


/**
 * write a program to calculate the average marks of Mathmatics , Biology, Chemistry, Physics, and Bangla of a student.
 * দেয়া আছে - math = 75.25, biology = 65, chemistry = 80, physics = 35.45, bangla = 99.50,
 * সবগুলো subject এর গড় বা average mark বের করতে হবে।
 * এবং দশমিকের পরে ২ ঘর দেখাতে হবে।
 */
let allSubject = 5; // মোট সাবজেক্ট ৫ টি ।
let math = 75.25;  // ১
let biology = 65;   // ২
let chemistry = 80;  // ৩
let physics = 35.45; // ৪
let bangla = 99.50; // ৫
let allMarks = math + biology + chemistry + physics + bangla; // সবগুলোর যোগফল 
let averageMark = allMarks / allSubject; // যোগফল কে ৫ দিয়ে ভাগ 
averageMark = averageMark.toFixed(2); // দশমিকের পরে ২ ঘর নেয়ার জন্য 
averageMark = parseFloat(averageMark); //  স্ট্রিং কে দশমিক নাম্বারে কনভার্ট করা।
console.log(averageMark); // ফাইনাল রেজাল্ট। 

/**
 * rakib's teacher gave him two variables. each variable contains a string. rakib's teacher asked him to combine these two strings and print them in one line. help rakib to write the program. 
 * ২ টা স্ট্রিং variable কে যোগ করতে হবে।
 */
const firstPart = 'I am going to be ';
const secondPart = 'an awesome web developer';
const result = firstPart + secondPart;
console.log(result);

/**
 * sara's mother is teaching her mathmetics. she gave sarah a number and asked her what the remainder wold be if she devided the number by 5. Help sara write the program.
 * দেয়া আছে - number = 119,
 * ভাগ দিতে হবে = 5 দিয়ে ।
 * বের করতে হবে ভাগ শেষ  বা remainder.
 */

let number = 119;
let devide = 5;
let ans = number % devide; // ভাগশেষ বের করার নিয়ম।
console.log(ans);