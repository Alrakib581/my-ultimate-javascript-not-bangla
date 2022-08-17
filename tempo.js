// let first = 5;
// let second = 7;
// console.log(first , second);
// // first = second;
// // second = first;
// // console.log(first, second);
// const temp = first;
// first = second;
// second = temp;
// console.log(first,second);

// let bigNumber = Math.max(45, 89, 98, 45, 10);
// console.log(bigNumber);


// let bigNumber = Math.min(45, 89, 98, 45, 1);
// console.log(bigNumber);

function maxInArray(numbers){
    for (let i = 0; i < numbers.length ; i++){
        const index = 1;
        const element = numbers[index];
        console.log(element);
    }
}
const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log(tallest);