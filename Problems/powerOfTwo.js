// power of two

let fixed_num = 4;

for (let i = 0; i <= fixed_num; i++) {
    if (Math.pow(2, i) === fixed_num) {
        console.log("Power of Two");
        break;
    }else {
        console.log("Power of Two is false");
    }
}