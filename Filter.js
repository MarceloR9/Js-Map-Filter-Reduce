function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [1, 4, 7, 13 , 20, 24, 31, 43, 52];

console.log(filtraPares(meuArray));