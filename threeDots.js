const age = [11, 12, 13, 14, 15, 16, 17];
const age2 = [21, 22, 23, 24, 25, 26, 27];
const age3 = [5, 6, 7, 8, 9, 10];

const totalAge = [...age, ...age2, ...age3]; // that means you have spered all of that in totalAge
console.log(totalAge);

const maximum = Math.max(...age, ...age2, ...age3);
console.log(maximum);