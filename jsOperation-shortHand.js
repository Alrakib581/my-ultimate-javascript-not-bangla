/**
 * var আর let এর মান বা value যেহেতু পরিবর্তন করা যায় , ত কি ভাবে সেটা করবো নিচে দেখানো হোলো
 *  var আর let এর মান বা value এর সাথে নতুন  মান + - * /  করা যায় ,ত কি ভাবে সেটা করবো নিচে দেখানো হোলো
 */
var price1 = 500;
var price2 = 200; // নতুন মান বসালাম।
price1 = 300;
console.log(price1);

// let mullo1 = 700;
// let mullo2 = 400;  // পুরাতন মানের সাথে নতুন মান  যোগ করলাম।
//  mullo2 = mullo2 + 300;
//  console.log(mullo2 + mullo1);


let mullo1 = 700;
let mullo2 = 400;  // পুরাতন মানের সাথে নতুন মান  যোগ করলাম। এটা shorhand system.
mullo2 += 300;
 console.log(mullo2 + mullo1);

/**
 *   =	    x = y	    x = y
 *   += 	x += y  	x = x + y
 *   -= 	x -= y  	x = x - y
 *   *= 	x *= y  	x = x * y
 *   /= 	x /= y  	x = x / y
 *   %= 	x %= y  	x = x % y
 */

let count = 10;
 count++;           // ++ দিলে মানের সাথে  ১ করে যোগ হবে। -- দিলে ১ করে কমবে ।
 console.log(count);
