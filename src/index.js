exports.min = function min(array) {
    if (!array || array.length === 0) return 0
    const min = array.sort((a, b) => a - b)
    return min[0]
}

exports.max = function max(array) {
    if (!array || array.length === 0) return 0
    const max = array.sort((a, b) => a - b).reverse()
    return max[0]
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) return 0
    const value = array.reduce((sum, num) => {
        return sum + num
    },0)
    return value / array.length
}
