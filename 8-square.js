const [ , , input] = process.argv
let num = parseInt(input, 10)

const repeat = () => {
    for (let i = 0; i < num; i++) {
   console.log('X'.repeat(num))
}
}

isNaN(num) ? console.log('Missing size') : repeat()

 


