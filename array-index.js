/**
 * এখন পর্যন্ত আমরা array declare করেছি ।
 * array এর মধ্যে কয়টা উপাদান আছে সেটা আমরা .length দিয়ে বের করছি ।
 * এই ফাইলে আমরা জানব array এর index number  কি এবং এটা আমরা কি ভাবে বের করবো।
 * array এর index number দিয়ে এর উপাদান কে কিভাবে দেখাব
 * array এর  index number সব সময় ০ থেকে শুরু হয়। কিন্তু এমন কোন array element যেটা ঐ array এর মধ্যে exist করেনা সেটার index number সব সময় -1 হবে।
 */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8 ];
console.log(numbers);         // normal array show


var numberses = [10, 11, 12, 13, 14, 15, 16, 17 ];
console.log(numberses[4]);         // searching array element by index number 


// আমরা চাইলে কোন array element কে বের করে একটি আলাদা variable এর মধ্যে রাখতে পারি।
let mobileBrand = ['nokia', 'symphony', 'motorola', 'huawei', 'xiaomi'];
let element = mobileBrand[3];
console.log(element);

// আমরা চাইলে কোন একটা array এর যেকোনো উপাদানকে পরিবর্তন করতে পারি। 

let keyboardPrice = [200, 500, 750, 1200, 700];
keyboardPrice[2] = 600;      // নতুন মান এভাবে সেট করে।
console.log(keyboardPrice);

// এবার আমরা জানব কিভাবে একটি array element এর index number খুজে বের করা যায়।
let mousePrice = [100, 300, 600, 700, 900];
mouse = mousePrice.indexOf(600);
console.log(mouse);
