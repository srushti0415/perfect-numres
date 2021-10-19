let b = 1;
function perfectNumbers(a) {
    while (b < a) {
        console.log(a % b)
        b++;
        if (b += a) {
            console.log("Perfecr Number.")
        }
        else {
            console.log("NOt a perfect number")
        }

    }

}
perfectNumbers(28);