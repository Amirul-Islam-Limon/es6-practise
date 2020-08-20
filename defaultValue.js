function add(num1, num2 = 0){ // we set default value of num2, if we don't provide any then work that //
    return num1 + num2;
}

const result = add(20); // here we did'n provide num2 value, so num2 = 0 //
console.log(result);