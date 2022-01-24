/* Lo de Santi */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Please enter the number you would like to FizzBuzz up to: ', function (answer) {

    for (let i = 1; i <= answer; i++) {
        console.log()}

    for (let i = 1; i <= answer; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            } else if (i % 3 === 0) {
                console.log("Fizz")
            } else {
                console.log(i)
            }
    }
    rl.close();
    // lo que hagas
});
rl.on('close', function () {
    console.log('\nby s3b4d3v');
    process.exit(0);

  });
  /Asking User for Input/

/ Original Solution to expand */
