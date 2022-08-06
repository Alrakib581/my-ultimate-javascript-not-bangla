/**
 * এইখানে আমরা জানব কিভাবে একটি array থেকে শেষের element কে বের করে দেয়া যায়।
 * ও একটি array এর শেষে কিভাবে একটি উপাদান যোগ করা যায়।
 * আবার আমরা আরো জানব কিভাবে array এর প্রথম থেকে একটি উপাদান কে বের করে দেয়া যায়।
 * ও array এর প্রথমে একটি উপাদানকে add করা যায়।
 */

// এই ৪ টি কাজ করার জন্য আমাদের ৪ টি মেথড লাগবে।
// এবং এই ৪ টি কাজ একটি array তে একাধিকবার করা যায়।

// 1: .push(); 2: .pop(); 3: .shift(); 4: .unshift();

// var animal = ['cow', 'goat', 'ship', 'horse','donky', 'camel'];
//   animal.push('python'); // শেষে python add হইছে।
//   console.log(animal);

// var animal = ['cow', 'goat', 'ship', 'horse','donky', 'camel'];
//   animal.pop();    // last element হিসাবে camel remove হইছে।
//   console.log(animal);

// var animal = ['cow', 'goat', 'ship', 'horse','donky', 'camel'];
//   animal.unshift('python'); // প্রথমে python add হইছে।
//   console.log(animal);

// var animal = ['cow', 'goat', 'ship', 'horse','donky', 'camel'];
//   animal.shift('python'); // প্রথমে cow remove হইছে।
//   console.log(animal);

var animal = ['cow', 'goat', 'ship', 'horse','donky', 'camel'];
var cowRemove = animal.shift(); // প্রথমে cow remove হইছে। এবং যেহেতু cow বের করা মেথড টাকে একটি variable এর মধ্যে রাখছি। তাই বের করা মান টাকে ঐ variable এর ভ্যালু বা মান হিসাবে সেট হবে।
  console.log(cowRemove);
