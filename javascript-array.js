/**
 * javascript এ array এর মাধ্যমে অনেক গুলো data কে এক সারিতে রাখা যায়।
 * array declare করার জন্য ৬ টা জিনিস লাগে।
 * 1 : keyword
 * 2 : name 
 * 3 : =
 * 4 : []
 * 5 : প্রতিটি মানের শেসে কমা , দিতেই হবে।
 * 6 : শেসে সেমি কোলন।
 */
// নিচে সংখ্যা দিয়ে array লেখা হইছে।
let friendsAge = [30, 28, 25, 23, 21, 22, 24];
console.log(friendsAge);

// নিচে string দিয়ে array লেখা হইছে।
let friendsName = [ 'Mobarok', 'Selim', 'Hosen', 'Merajul', 'Motin', 'sumon'];
console.log(friendsName);

/**
 * একটি array declare করলাম। কিন্তু সুধু declare করলে ত আর সব কাজ শেষ হয়ে  যাবেনা।
 * যদি এমন হোল যে একটি array এর মধ্যে কয়টা  উপাদান বা element আছে সেটা জানতে হবে। তাহলে সেটা কিভাবে জানব ? নিচে দেখানো হোলো। 
 */
 let friendsWork = [ 'dokandar', 'tutor', 'student', 'probashi', 'lol', 'bussiness'];
 friendsWork = friendsWork.length; // array এর নামের সাথে  .length দিলেই জানা যায়।
 console.log(friendsWork);
