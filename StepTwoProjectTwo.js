function getRandomNumberBetween(initial, final){
    let num = Math.floor(Math.random() * (final - initial + 1)) +  initial;
    return num;
}

console.log('Random number : '+getRandomNumberBetween(1357, 1978));