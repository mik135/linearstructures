// This function accepts two sets and sums up distinct numbers in each set
function distinctSum(arr1, arr2) {
    let distinctSum = 0;

    for(let char of arr1) {
        // if arr2 does not include char
        if(!arr2.includes(char)) {
            distinctSum += char;
        }
    }

    for(let char of arr2) {
        // if arr1 does not include char
        if(!arr1.includes(char)) {
            distinctSum += char;
        }
    }

    return distinctSum;
}



// This function calculates the dot product of two vectors of the same dimensions

function dot_product(vector1, vector2) {
    let ps = 0;
    // Make sure the dimensions are equal
    if(vector1.length !== vector2.length) {
        return "Cannot multiply Vectors of different dimensions"
    }

    // Loop through the first vector
    for(let i = 0; i < vector1.length; i++) {
        // Loop through the second vector
        for(let j = 0; j < vector2.length; j++) {
            // If the indexes are not equal
            if(i !== j) {
                // Do nothing
                continue;
            } else {
                // a*b = a1b1 + a2b2 ...
                ps += vector1[i] * vector2[j];
            }
        }
    }

    if(ps === 0) {
        return "Both vectors are orthogonal";
    }

    return ps;
}


console.log(dot_product([1,2], [2,-1]))