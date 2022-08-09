/**
 * The standerd height a vollyball player is 7 feet. Jim wants to join the volleyball team.so he decided to measure his height to see if he meets the standard. Calculate his height in feet.
 * to convert inch ot feet. দেয়া আছে height = 84 inc.
 */

// const myInc = 84;
// const oneFeet = 12;
// const myFeet = myInc / oneFeet;
// console.log(myFeet);
// uporer problem ta ke function er maddome korar niom


// function incToFeet( inches ){
//     const feet = inches / 12;
//     return feet;
// }
// const dadaInches = 84;
// const dadaFeet = incToFeet(dadaInches);
// console.log(dadaFeet);

// again function call 
// const nanaInches = 60;
// const nanaFeet = incToFeet(nanaInches);
// console.log(nanaFeet);

/**
 * rakib is web developer, and he cycles to work. He knows the distance between his house and his office in miles. rakib wants to mesure the distance in kilometers. Calculate the distance in km.
 * dea ache 2 mile 
 * print the distance in km
 */
// function mileToKm( killometer){
   
//     const Km = 1.60934;
//     const convertKm = killometer * Km;
//     return convertKm;
// }
// const mile = 2;
// const converted = mileToKm(mile);
// console.log(converted);

/**
 * kono akti shonkha jor naki bijor ber korar niom.
 * 
 */
// console.log(4/2);
// console.log(98/2);
// console.log(144/2);
// console.log(128/2);

// console.log(7/2);
// console.log(83/2);
// console.log(145/2);
// console.log(87/2);

// console.log(4 % 2);
// console.log(98 % 2); shob shomoy bhagsesh 0 hobe.
// console.log(144 % 2);
// console.log(128 % 2);

// console.log(7 % 2);
// console.log(83 % 2);
// console.log(149 % 2); // shob shomoy bhag sesh 1 thakbe. 
// console.log(87 % 2);
//  ai tuku code lekhar maddhome amra kono shonkha odd naki even sheta ber korlam 

// let number = 117;
// let oddEven = number % 2;
// console.log(oddEven);
// if(oddEven === 0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// function isEven (number){
//     const remainder = number % 2;
//     if(remainder === 0){
//             return true; 
//     }
//    else{
//     return false;
//    }
    
// }
// const isseven = isEven(239);
// console.log(isseven);

/**
 * kono akti shal leep year ki na ta ber korar niom.
 */
function isleepyer (year){
    const remainder = year % 4;
    if( remainder === 0){
        // return true;
        console.log('Yes its leepyear',year);
    }
    else{
        // return false;
        console.log('Oh shit lol',year);
    }
}
isleepyer(1984);
// const leebBochor = isleepyer(1952);
// console.log(leebBochor);

// leep year nie bistartio google a search kore shikhe nite hobe 