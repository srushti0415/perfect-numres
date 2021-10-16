// PRIME NUMBERS
let b = 1;
function primeNumber(a) {
    while (b>a) {
        if (a % b == 0) {
            console.log("not prime no")
            b++;
        }

            else {
            console.log(" prime no")
        }
    }
}
primeNumber(11)