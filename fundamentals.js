// 1.How to declare a variable using let and onst

const fastName = 'Anan';
let season = 'rainy';
season = 'winter';

if (fastName === 'anan' || season === 'rainy') {

}
else {

}

// 3.array
// index
// length
// push
// pop
const numbers = [12, 36, 54, 12, 96, 4, 53, 64, 63, 45];

// Loop

// for loop 
// in loop

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number)
}

// function

function multiple(num1, mum2) {
    const result = num1 * mum2;
    return result
}

console.log(multiple(25,36))
