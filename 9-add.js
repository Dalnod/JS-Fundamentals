const [ , , arg1, arg2] = process.argv
const num1 = parseInt(arg1, 10)
const num2 = parseInt(arg2, 10)

 const addFunction = (a, b) => {
    return a + b;
}

console.log(addFunction(num1, num2))