const [ , , arg1] = process.argv;
const num = parseInt(arg1)

function factorial(a) {
    let result = 1;
    for (let i = 2; i <= a; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(num))