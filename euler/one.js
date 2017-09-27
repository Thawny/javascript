// Trouver tous les multiples de 3 et 5 < n et les additionner

(function main(m) {
    const multiples = allMultiplesSmallerThan(m);
    if (multiples == []) console.log('Aucun nombre < à '+m+' n\'est multiple de 5 ou 3')
    else {
       const result = customReduce(multiples)
       console.log(result)
    }
})(1000)

// (Int) :: Bool
function isMultipleOfThreeFive(number) {
    return !(number % 5) || !(number % 3)
}

//takes m and returns an array with all n < m where n is a multiple of 3 or 5
// (Int) :: Array
function allMultiplesSmallerThan(m) {
    var multiples = []
    for (let i = 1; i < m; i++) {
        if (isMultipleOfThreeFive(i)) multiples.push(i)
        else continue
    }
    return multiples
}

function customReduce(numbers) {
   var acc = 0;
   for (let i = 0; i < numbers.length; i++) {
       acc += numbers[i]
   }
   return acc
}

//or for lazy people :
function nativeReduce(numbers) {
    return numbers.reduce((acc,curr) => acc + curr)
}
