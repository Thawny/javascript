function divisibleBy(numb,by) {
    if(numb % by == 0) return true
    else return false
}

divisors = []
function findDivisorsOf(numb, tryBy) {
    if (numb !== 1) {
        if (divisibleBy(numb, tryBy)) {
            divisors.push(tryBy)
            findDivisorsOf(numb/tryBy, 2)
        } else {
            findDivisorsOf(numb, tryBy + 1)
        }
    } else {
        console.log('done')
        console.log(divisors)
    }

}

findDivisorsOf(10,2)
