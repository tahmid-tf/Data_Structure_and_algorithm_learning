// insertion sort

function insertion_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numberToInset = arr[i];
        let j = i -1

        while (j >= 0 && arr[j] > numberToInset) {
            arr[j+1] = arr[j];
            j= j - 1
        }

        arr[j+1] = numberToInset;
    }
}

const arr = [8,20,-2,4,-6]
insertion_sort(arr)
console.log(arr)