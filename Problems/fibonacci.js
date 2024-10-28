// fibonacci

let fibonacci_array = [0, 1];

for (let i = 1; i < 10; i++) {
    let new_num = fibonacci_array[i - 1] + fibonacci_array[i];
    fibonacci_array.push(new_num);
}

console.log(fibonacci_array);