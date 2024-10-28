// cartesian problem

const a = [1,2]
const b = [3,4]

function cartesian_problem(a,b) {

    let output_array = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            output_array.push([a[i], b[j]])
        }
    }
    console.log(output_array)
}

cartesian_problem(a,b);