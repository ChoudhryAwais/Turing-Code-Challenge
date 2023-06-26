// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function luckyNumber(arr) {
    let eleObj = []
    let greatestCountObj;
    let luckyNumber;
    arr.forEach(ele => {
        let sampleObj = {}
        let eleObjex = eleObj.filter(e => (Object.keys(e))[0] == ele)
        if (eleObjex.length == 0) {
            let eleCount = arr.filter(x => x == ele).length
            sampleObj[ele] = eleCount
            eleObj.push(sampleObj)
        }
    })
    eleObj.forEach((ele, i) => {
        if (i !== 0) {
            if (Object.values(ele)[0] > Object.values(eleObj[i - 1])[0]) {
                greatestCountObj = ele
            }
        } else {
            greatestCountObj = ele
        }
    })
    luckyNumber = Object.keys(greatestCountObj)[0] == Object.values(greatestCountObj)[0] ? Object.keys(greatestCountObj)[0] : -1
    return luckyNumber
}

luckyNumber([2, 2, 3, 1, 6, 6, 8])


