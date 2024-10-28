//linear search

arr = [-5,2,10,4,6]


function index_search(arr, target) {

    if (typeof arr != "object") {
        console.log("This is not an array")
    }

    arr = arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) {
            console.log("The index is "+ i)
            return
        }

    }

    console.log("Input value does not exists");
}

index_search(arr, 10)