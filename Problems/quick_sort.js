function quick_sort(arr) {

    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = []
    let right = []

    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quick_sort(left), pivot, ...quick_sort(right)];

}

const arr = [8, 20, -2, 4, -6]
console.log(quick_sort(arr))