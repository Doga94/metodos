// Ejercicio avanzado con push()

const multiplyOddNumbers = (arr) => {
const result = [];

arr.forEach((item) => {
    if (item % 2 !== 0) {
      result.push(item * 3);
    }
});

return result;
};

const numbers = [1, 2, 3, 4, 5, 6];
const resultArray = multiplyOddNumbers(numbers);

console.log(resultArray); // Output: [3, 9, 15]
