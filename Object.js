/**
 * এখানে আমরা javascript object সম্পর্কে জানব।
 */
// let friends = {
//     rakib: 100,
//     sumon:200,
//     selim: 150,
//     salma: 200
// }
// console.log(friends);

// let mobile ={
//     brand: 'Oppo',
//     price: 5000,
//     storage: '32 GB',
//     color:'silver',
//     camera: '8mega Pixel'
// }
// console.log(mobile.price);
// console.log(mobile.brand);

// kono akta object keys er value poar jonno ja korte hobe

// let mobile ={
//     brand: 'Oppo',
//     price: 5000,
//     storage: '32 GB',
//     color:'silver',
//     camera: '8mega Pixel'
// // }
// // // kono akta object keys er value poriborton korar jonno ja korte hobe
// // mobile.price = 17000;
// // console.log(mobile.price);

// let shopingCart = {
//     books: 5,
//     sunglass: 50,
//     Kayboard: 3,
//     mouse: 2,
//     pen: 6
// }
// console.log(shopingCart);
// console.log(shopingCart.pen);
// // kono akta object keys er value poar jonno ja korte hobe
// // var penCount = shopingCart.pen;
// // var penCount2 = shopingCart['mouse'];
// // var properties = Object.keys(shopingCart);
// // var propertiValues = Object.values(shopingCart);
// // console.log(propertiValues);

// var propertyName = 'mouse'
// var propertyValue = shopingCart[propertyName];
// console.log(propertyValue);

// object keys er man set korar 3 upae 
// shopingCart.mouse = 20;
// console.log(shopingCart)
// shopingCart['pen'] = 30;
// console.log(shopingCart);
// shopingCart[propertyName] = 100;
// console.log(shopingCart);

// object er upor loop chalanor upae 
let shopingCart = {
    books: 5,
    sunglass: 50,
    Kayboard: 3,
    mouse: 2, 
    pen: 6,
    speaker: 2
}
let shopingitems = ['books','sunglass', 'shoes', 'pen'];

// var friendsAge = [12, 14, 31, 22, 10];
var friendsAge ={
    selim: 22,
    motin: 33,
    habib: 28,
    sumon: 20,
    jamal: 40,
    kazi: 30,
    motaleb:90
}
const keys = Object.keys(friendsAge);
console.log(keys);
for( var i = 0; i < keys.length ; i++){
    // console.log(keys[i]);
    // console.log(i);
    var propertyName = keys[i];
    var propertyValue = friendsAge[propertyName];
    // console.log(propertyName, propertyValue);
}

// shohoj niom for in loop 
for(var propertyName in friendsAge){
    const value = friendsAge[propertyName];
    console.log(propertyName, value)
}
