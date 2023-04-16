const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//totalBatteries variable - holds the sum of all the battery amounts in the batteryBatches array
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;

// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

let totalBatteries = batteryBatches.reduce((accumulator, currentNumber) => {const initialValue = 0;
    const batteryAmount = initialValue + currentNumber;
return accumulator + batteryAmount})

console.log(totalBatteries);