const getMax = (arr) => {
    let max = 0
    for(let el of arr) {
        if (max < String(el).length) {
            max = String(el).length
        }
    }
    return max
}

const getPosition = (num, place) => {
    return  Math.floor(Math.abs(num)/Math.pow(10,place)) % 10
   }

const radixSort = (arr) => {
    const max = getMax(arr);

    for (let decimalPlace = 0; decimalPlace < max; decimalPlace++) {
        let buckets = Array.from({length: 10}, () => [])
        for (let j = 0; j < arr.length; j++) {
            let actualNumber = arr[j]
            buckets[getPosition(actualNumber, decimalPlace)].push(actualNumber);
        }
        arr = [].concat(...buckets);
    }
    return arr
}

console.log(radixSort([4, 57, 7, 3, 933])) 
// [3,4,7,57,933]
console.log(radixSort([4124, 53253, 1231, 43, 5])) 
// [5, 43, 1231, 4124, 53253]
