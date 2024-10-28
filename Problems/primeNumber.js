function primeNumber(num) {
    let arr = [];

    if (num < 2){
        console.log("Not a prime number");
        return;
    }

    for (let i = 1; i < num; i++) {
        if(num % i === 0) {
            arr.push(i);
        }
    }

    if (arr.length < 3) {
        console.log("This is a prime number");
    }else {
        console.log("Not a prime number");
    }
}


primeNumber(100);