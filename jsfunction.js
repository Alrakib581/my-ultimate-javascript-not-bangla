/**
 * একটা function লিখে যতবার খুসি call করা যায়।
 * loop একটানা চলে কিন্তু function যখন যেখানে খুসি চালানো যায়। 
 * এইখানে আমরা জানব javascript এর function কীভাবে লেখে বা declare করে।
 * 
 */
// function rakib(){
//     console.log('rakib amar name tomar nam ki');
// }
// rakib();
// rakib();
// rakib();
// rakib();

// function dimkena (taka){ // function lekhar pore akta nam dite hoy function er. tar pore akta (paramiter) dite hoy.
//     console.log('dimer dam den age ', taka);
//     console.log(taka);
// }
// let dam = 200;
// dimkena(dam);

// function একাধিক প্যারামিটার দেয়া যায়। 

// function add (rak, bak, kak, jak){
//     console.log('Ami bhat khai');
//     console.log(rak , bak, kak, jak);
// }
// add(10, 20, 30, 40);

// function vowels (a , e, i, o, u){
//     let sum = a + e + i + o + u;
//     console.log(sum);
// }
// vowels(5,10,15,20,25);
// vowels(5,10,15,20,25);

// return use korar niom

// function add ( number1, number2){
//     console.log(number1,number2);
//     let sum = number1 + number2;
//     return sum;
// }
// // add(20,10);
// let total = add(20,10);
// console.log(total); 

// function eggAno ( eggKhao){
//     let eggPrice = 10;
//     let khabo = eggKhao / eggPrice;
//     return khabo;


// }
// let takaDebo = 150;
// let eggKhabo = eggAno(takaDebo);
// console.log(eggKhabo);

// function number (assignment1, assignment2, assignment3){
//     const totalMarks = assignment1 + assignment2 + assignment3;
//     const markAverage = totalMarks / 3;
//     return markAverage;
    
// }
// const assignment1 = 60;
// const assignment2 = 58;
// const assignment3 = 59;
// const myresult = number(assignment1, assignment2, assignment3);
// console.log(myresult);

function add (num1, num2){
    let sum = num1 + num2;
    return sum;
}
let summi = add(20,20);
let mummi = add(25,80);
let allNumber = add (summi, mummi);
console.log(allNumber);
