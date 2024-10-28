function climebingStaricase(n){
    const noOfWays = [1,2]

    for (let i=2; i<=n; i++){
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
    }

    return noOfWays[n-1]
}

console.log(climebingStaricase(1))
console.log(climebingStaricase(2))
console.log(climebingStaricase(3))
console.log(climebingStaricase(4))
console.log(climebingStaricase(5))

// BIG-O = O(n)