function Accumulator(startingValue){

    this.value = +startingValue

    this.num = 0
    
    this.read = function(){
        this.num += +prompt('Увеличить на', '')
        this.value += this.num
    }
}

let accumulator = new Accumulator(1)

accumulator.read()
accumulator.read()

alert(accumulator.value)