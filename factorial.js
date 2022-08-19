// // let sum = 0;
// // for(let i = 1; i <= 7; i++){
// //     sum = sum + i
// //     console.log(i,sum);
// // }

// function sumOfNumber(number) {
//     let sum = 0;
//     for (let i = 1; i <= number; i++) {
//         sum = sum + i
//         console.log(i, sum);
//     }
//     return sum;

// }
// sumOfNumber(1);

// function mutip (number){
//     let result = 1;
//     for (let i = 1; i <= 7; i++){
//         result = result *i;
//     }
//     return result;
// }
// const result = mutip(7);
// console.log(result)


//4 ! = 3*2*1
//5 ! = 5*4*3*2*1

// for (let i = 10; i >= 1; i-- ){
//     console.log(i);
// }

// function print ( a , b ,c){
//     return a+ b;


// }
// console.log(print(1,2,3));
// let factorial = 1;

// for(let i = 5; i >= 1; i--){
//     factorial = factorial * i;
// }
// console.log(factorial);

function factorial (i){
    if(i == 1){
        return 1;
    }
    return i * factorial(i-1);
}
const result = factorial(5);
console.log(result);