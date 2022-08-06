 /**
  * এই ফাইলে আমরা জানব if , else ,else if আসলে কি এবং কিভাবে কাজ করে। 
  * আমরা প্রতিদিন অনেক অনেক সিদ্ধান্ত নেই। যেমন এটা করব আবার এটা না হলে ওটা করব ।  if else else if কিছুটা এমনই । 
  * মানে এই শর্ত যদি পূরণ হয় ত কোড রান কর , আর যদি এটা না হয় ত ঐ কোড রান কর। 
  */
//  var myMoney = 100;
//  var chikenFry = 75;

//  if ( myMoney > chikenFry){ // যদি শর্ত পূর্ণ হয় ত কোড চলবে । নাহলে চলবে না।
//     console.log('Aj moja kore chicken fry khabo');
//  }

//  let myTaka = 50;
//  let birani = 100;

//  if(myTaka > birani){  // যদি শর্ত পূর্ণ হয় ত কোড চলবে । নাহলে চলবে না।
//     console.log('wow birani khabo aj');
//  }
//  else{
//     console.log('aj taka nai bole khete parlam na'); // উপরের শর্ত পূরণ না হলে এটা চলবে।
//  }

 /**
  * multiple condition কিভাবে লেখে ও এটা কাজ করে সেটা আমরা এইখানে জানব।
  */
//  var isJobHolder = true;
//  var isGraduated = false;
//  var salary = 20000;

//  if (isJobHolder == true && isGraduated == true && salary > 18000){
//     console.log('cholo amra bier jonno patri dekhi');  এখানে যেহেতু logical && ব্যাবহার করা হয়েছে  তাই ৩ টা শর্ত পূরণ হতে হবে। নাহলে কোড চলবে না। 

//  }
//  else{
//     console.log('beton kom nijei cholte parena abar bie korte ashche lol');
//  }

/**
 * 
 */
//  var isJobHolder = true;
//  var isGraduated = true;
//  var salary = 20000;

//  if (isJobHolder == true && isGraduated == true && salary > 18000){
//     console.log('cholo amra bier jonno patri dekhi');  //এখানে যেহেতু logical && ব্যাবহার করা হয়েছে  তাই ৩ টা শর্ত পূরণ হতে হবে। আর এখানে ৩ টা শর্ত পূরণ হয়েছে তাই কোড চলেছে। 

//  }
//  else{
//     console.log('beton kom nijei cholte parena abar bie korte ashche lol');
//     // উপরের শর্ত যেহেতু পূরণ হয়েছে তাই আর নিচে আসেনি। তাই কোড রান হয়নি।
//  }

//  let isBoroloks = true;
//  let isHandsome = true;
//  let bcsCader = false;

//  if( isBoroloks == true || bcsCader == false && isHandsome == true ){
//     console.log('yes I have a beautiful grilfriend');
//  }                                         // creat a program with logical & and logical or || . 
//  else{
//     console.log('tui gorib tor kopale gf nai.');
//  }

 /**
  * multi stage condition লেখার নিয়ম।
  */
 let mytaka = 85;
 let petrol = 135;
 let octan = 130;
 let dissel = 115;

 if( petrol <= mytaka){
    console.log('private car chalabo');
 }
 else if(octan <= mytaka){
    console.log('motorcycel chalabo');
 }
 else if(dissel <= mytaka){
    console.log('butbuti chalabo');
 }
 else{
    console.log('pa die hete jabo. achara ar kono upae nai.');
 }
/**
 * nested -condition লেখার নিয়ম।
 */

let bangla = true;
let english = true;
let banglish = true;

if ( bangla == true){ // main টা যদি শর্ত পূরণ না করে তাহলে এর মধ্যে থাকা কোন কোড ই চলবে না।
    if(english == true){ // এটা যদি শর্ত পূরণ না করে তাহলে এর মধ্যে থাকা কোন কোড ই চলবে না।
        if(banglish == false){ //এটা যদি শর্ত পূরণ না করে তাহলে এর মধ্যে থাকা কোন কোড ই চলবে না।
            console.log('you are a good student');
        }
        else{
            console.log('no no no');
        }
    }
}
else{
    console.log('pora parena shudhu fakibazi kore'); // একদম main টা কাজ না করলে এইটা কাজ করবে।
}
