/**
 * javascript এ যদি কোন সংখ্যার মান দশমিক এ আসে। তাহলে দশমিক এর পরে আমি কয় সংখ্যা নেব সেটা ঠিক করার জন্য toFixed(); method ব্যাবহার করতে হবে।
 * toFixed ব্যাবহার করলে যে ফলটা পাওয়া যায় সেটা সব সময় স্ট্রিং থাকে। তাই যদি toFixed(); use করার পরে সেই সংখ্যাকে parseFloat(); method এর মাধ্যমে সংখ্যায় রূপান্তর করতে হয় । 
 */
let mobilePrice = 104.202;
let chargerPrice = 250.251;   // প্রথমে ২ টা variable declare করলাম । এর পরে আরেকটা variable declare করে যোগ করলাম।
let totalPrice = mobilePrice + chargerPrice;
console.log(totalPrice);

// আমি চাই দশমিক এর পরে এক সংখ্যা নেব।
totalPrice = totalPrice.toFixed(1);
console.log(totalPrice);
// আমি চাই প্রাপ্ত রেজাল্ট কে নাম্বারে কনভার্ট করতে।
totalPrice = parseFloat(totalPrice);
console.log(totalPrice);