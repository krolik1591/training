function generateNum(x, y){
    Math.floor(y/3) * x + 1
    let a = x + y * 3 + Math.floor(y/3)
    return a%9 + 1
}

function generateSetka(){
    let setka = []

    for(let y = 0; y < 9; y++){
        let str = []
        for(let x = 0; x < 9; x++){
            str.push(generateNum(x, y))
        }
        setka.push(str)
    }
    return setka
}

function printSetka(setka){
    for(let item of setka){
        console.log(item)
    }
}

function random(){
    return Math.floor(Math.random() * 3)
}

function swapRollSmall(setka){
    let kvadrat = random()
    let ryadok = random() + kvadrat * 3
    let ryadok1 = (ryadok + 1)%3 + kvadrat * 3
    

    menyauMestami(setka, ryadok, ryadok1)

}

function swapKvadratov(setka){
    let kvadrat = random()
    let kvadrat1 = (kvadrat + 1)%3
    
    menyauMestami(setka, kvadrat * 3, kvadrat1 * 3)
    menyauMestami(setka, kvadrat * 3 + 1, kvadrat1 * 3 + 1)
    menyauMestami(setka, kvadrat * 3 + 2, kvadrat1 * 3 + 2)
}

function menyauMestami(arr, mesto1, mesto2){
    let x = arr[mesto1]
    arr[mesto1] = arr[mesto2]
    arr[mesto2] = x
}

setka1 = generateSetka()
swapRollSmall(setka1)
printSetka(setka1)