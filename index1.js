// PRIME NUMBERS
let b = 2;
function primenumber(a) {
    let primeno = 0;
    while (b < a) {
        if (a % b == 0) {
            console.log("not prime no")
            primeno = 1;
        }
        b++;
    }
        if(primeno == 0) {
            console.log(" prime no")
        }
    
}
primenumber(1);