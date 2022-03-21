function A(){
    alert('Priv')
}

function B(){
    alert('Priv')
}

let a = new A
let b = new B

alert(a==b)
