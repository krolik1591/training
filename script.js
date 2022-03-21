function Calculator(x1, x2){
    this.x1 = x1;
    this.x2 = x2;
    
    this.read = function(){
        this.x1 = +prompt('Введите число', '')
        this.x2 = +prompt('Ещё разок', '')
    }

    this.sum = function(){
        return(this.x1 + this.x2)
    }

    this.mul = function(){
        return(this.x1 * this.x2)
    }

}

let calculator = new Calculator()
calculator.read()

alert( 'Sum=' + calculator.sum() )
alert( 'Mul=' + calculator.mul() )