function Accumulator(startingValue){

    this.value = startingValue

    this.read = function(){
        this.value += +prompt('Увеличить на', '')
    }
}

let accumulator = new Accumulator()

accumulator.read()
accumulator.read()

alert(accumulator.value)