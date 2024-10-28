//Binary Search

//linear search

arr = [-5,2,10,4,6]


function index_search(arr, target) {

    if (typeof arr != "object") {
        console.log("This is not an array")
    }

    arr = arr.sort((a, b) => a - b)
    console.log(arr)


    let half_length = Math.round(arr.length / 2)

    for (let i = 0; i < half_length; i++) {

        if (arr[i] === target) {
            console.log("The index is "+ i)
            return
        }

    }

    for (let i = half_length + 1; i < arr.length; i++) {

        if (arr[i] === target) {
            console.log("The index is "+ i)
            return
        }

    }
}

index_search(arr, 10)