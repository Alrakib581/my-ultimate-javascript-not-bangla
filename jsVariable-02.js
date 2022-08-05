/*
javascript এ variable অত্যান্ত গুরুত্বপূর্ণ একটি বিষয় । যদি বলি যে variable ছাড়া javascript এর কোনো মূল্য নাই। সেটাও কিন্তু মিথ্যা নয়। তাহলে বোঝা গেলো javascript শিখতে গেলে প্রথমেই variable শিখতে হবে। javascript এ ৩ ধরনের variable রয়েছে ।
১ ঃ নাম্বার টাইপ variable
১ ঃ স্ট্রিং টাইপ variable
১ ঃ বুলিয়ান টাইপ variable
*/
// js file এ variable declare করার নিয়ম নিম্নরুপঃ

/*  প্রথমেই javascript এর দেওয়া keyword লিখতে হবে। সেটা হতে পারে -
  var , let , const এখন এই ৩ টা keyword এর মধ্যে কখন কোনটা use করবো সেটা প্রয়োজন অনুযায়ী নির্ভর  করবে । এখানে উল্লেখ থাকে যে 
  var দিয়ে declare করা variable ঐ একই নামে আবার declare করা  ও তার মান পরিবর্তন করা যায়।

  let দিয়ে declare করা variable ঐ একই নামে আবার declare করা যায়না কিন্তু  তার মান পরিবর্তন করা যায়।
  const দিয়ে declare করা variable ঐ একই নামে আবার declare করা যায়না ও তার মান পরিবর্তন করা যায়না ।
*/

/* keyword এর পরে variable এর একটা নাম দিতে হবে। এর পরে = চিনহ দিতে হবে। এর পরে variable এর value বা মান দিতে হবে। আর শেসে সেমি কোলন দিতে হবে। যেমন ঃ 
  */
var nokiaPrice = 17500;
var samsungPrice = 13500; // নাম্বার টাইপ variable
var oppoPrice = 5500;

let xiaomiPrice = 13500;
let realmePrice = 8990;  // নাম্বার টাইপ variable
let infinixPrice = 17990;

const iphonePrice = 45000;
const onplusPrice = 71000; // নাম্বার টাইপ variable 
const redmiPrice = 18990;

var motorolaStart = 'start motorola in 1990';
var simonsStart = 'start simons 2001'; // string type variable
var sonyStart = 'start sony 1980';

let xiaomiStart = 'start xiaomi in 2005';
let realmeStart = 'start realme in 2017';    //string type variable
let infinixStart = 'start infinix in 2018';

const iphoneStart = 'iphone start in 2005';
const onplusStart = 'onplus start in 2010';  //string type variable
const redmiStart = 'redmi start in 2019';

var areYouSingle = true;
let areYouSingle = true;  // boolean type variable
const areYouMingle = false;