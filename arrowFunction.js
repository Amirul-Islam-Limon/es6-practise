// first way of function decleration //
function add(num1, num2){
    return num2 + num1;
}

// second way of function decleration //

const add = function myFunc(num1, num2){
    return num1 + num2;
}

//  theree way of function declaration //

const add = (num1, num2) => num1 + num2  // it will return automatecally // 

// four way of function  declaration // 

const add = (num1, num2)=>{
    const sum = num1 + num2;
    const multiple = num1 * num2;
    const result = sum * multiple;  // when you use multiple line , you have to return // 
    return result ;
}
