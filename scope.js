// function scope
    var number = 1

// block scope -> {}
    let age = 1
    const PI = 3.14

let x = 1

if (x == 1) {
    let x = 2
    x = 10
    console.log('x',x)
}

console.log('x',x)