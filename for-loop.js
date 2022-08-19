/**
 * একটি কাজ যখন বার বার করা হয় , তখন তাকে loop বলে।
 * loop লেখার জন্য ৪ টা জিনিস লাগে
 * 1 : loop variable
 * 2 : loop condition
 * 3 : loop body
 * 4 : loop এর মান কত করে পরিবর্তন হবে সেটা 
 *  নিচে একটি সাধারণ loop লেখা হোলো ।
 */

/**
 * for loop লেখার নিয়ম।
 */
// for( var money = 0 ; money < 10 ; money++){ // loop variable + condition + increment or decrement 
//     console.log(money);
// }

// জোড় সংখ্যা দেখানোর উপায়।
// for( var money = 0 ; money < 10 ; money += 2){
//     console.log(money);
// }

// বিজোড় সংখ্যা দেখানোর উপায়।
// for( var money = 1 ; money < 10 ; money += 2){
//     console.log(money);
// }

// simple version for loop 

// for( let i = 100 ; i < 200 ; i++){
//     console.log(i);
// }
/**
 * for loop দিয়ে array element দেখানোর উপায়।
 */

// var numbers = [10, 20, 30, 40, 50, 60, 70, 80];

// for( var i = 0 ; i < 8 ; i++){
//     var number = numbers[i];
//     console.log(number);
// }

// var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// for( var i = 0 ; i < numbers.length ; i++){
//     var number = numbers[i];
//     console.log(number);
// }

// break ব্যাবহারের নিয়ম।

// var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// for( var i = 0 ; i < numbers.length ; i++){
//     var number = numbers[i];
//     if( number > 70){ // এখানে variable এর মান যখন ই ৭০ এর বড় হবে। সাথে সাথে break কাজ করে loop বন্ধ করে দিবে।
//         break;
//     }
//     console.log(number);
// }

// var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 8, 7, 100];

// for( var i = 0 ; i < numbers.length ; i++){
//     var number = numbers[i];
//     if( number < 40){
//         continue;
//     }
//     console.log(number);
// }