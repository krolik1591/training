function main() {
    let pizda = [swapRollSmall, swapKvadratov, transpose]

    let setka = generateSetka()

    for (let i = 0; i < 50; i++) {
        let func = pizda[random3()]
        func(setka)
    }

    richPrintSetka(setka)
}

function generateSetkaNum(x, y) {
    let offset3left = y * 3
    let offset1Up = Math.floor(y / 3)
    let a = x + offset3left + offset1Up
    return a % 9 + 1
}

function generateSetka() {
    let setka = []

    for (let y = 0; y < 9; y++) {
        let str = []
        for (let x = 0; x < 9; x++) {
            str.push(generateSetkaNum(x, y))
        }
        setka.push(str)
    }
    return setka
}

function swapRollSmall(setka) {
    let kvadrat = random3()

    let r1 = random3()
    let r2 = (r1 + 1) % 3

    swap(setka, kvadrat * 3 + r1, kvadrat * 3 + r2)
}

function swapKvadratov(setka) {
    let kvadrat1 = random3()
    let kvadrat2 = (kvadrat1 + 1) % 3

    for (let i = 0; i < 3; i++)
        swap(setka, kvadrat1 * 3 + i, kvadrat2 * 3 + i)
}

function transpose(setka) {
    let setkaOld = setka.slice()

    for (let y = 0; y < 9; y++) {
        let str = []
        for (let x = 0; x < 9; x++) {
            str.push(setkaOld[x][y])
        }
        setka[y] = str
    }
}

function swap(arr, i1, i2) {
    let x = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = x
}


function random3() {
    return Math.floor(Math.random() * 3)
}


main()
