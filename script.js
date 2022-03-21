function Calculator(){
    x1;
    x2;
    
    read(){
        this.x1 = prompt('Введите число', '')
        this.x2 = prompt('Ещё разок', '')
    }

    sum(){
        return(this.x1 + this.x2)
    }

    mul(){
        return(thix.x1 * thix.x2)
    }

}

let calculator() = new Calculator()

alert( 'Sum=' + calculator.sum() )
alert( 'Mul=' + calculator.mul() )