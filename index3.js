let b = 2;
function perfectNum(a) {
    var total = 1;
    while (b < a) {
        if (a % b == 0) {
            total = total + b;
        }
        b++;
    }
    if (a == total) {
        console.log("perfect no :)")
    }

}
perfectNum(6);