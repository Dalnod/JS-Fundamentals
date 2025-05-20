// const [ , , multiple] = process.argv
let multiple = process.argv[2]
let number = parseInt(multiple, 10)
if (isNaN(number)) {
    console.log(
        'Missing number of occurrences'
    )
} else {
        for (let i = 0; i < number; i++ ) {
            console.log('C is fun')
        }
}

