let b = 2;
function perfectNumbers(a) {
    var total = 1;
    while (b < a) {
        if (a % b == 0) {
            total = total + b;
        }
        b++;
    }
    if (a == total) {
        console.log("perfect number")
    }

}

perfectNumbers(4900);


// 6, 28, 496,  8,128 this r perfect no