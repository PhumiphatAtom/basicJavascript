// // #1
// const number = [1, 2, 3, 4]

// const [number1 ,number2, number3, number4] = number

// console.log('number1', number1)
// console.log('number2', number2)
// console.log('number3', number3)
// console.log('number4', number4)

// //#2
// const number = [1, 2, 3, 4]

// const [number1, number3, number4] = number

// console.log('number1', number1)
// console.log('number3', number3)
// console.log('number4', number4)

// //#3
// const display = ([number1 ,number2, number3, number4]) => {
//     console.log('number1', number1)
//     console.log('number2', number2)
//     console.log('number3', number3)
//     console.log('number4', number4)
// }

// display([1,2,3,4])


// const fetchapi = endpoint => [result, statucode]
// const [result, statucode] = fetchapi('http://google.co.th')
// if(statucode === 200) {
//     console.log('result', result)
// }

const call = () => {
    return [
        100,
        200,
        300,
    ]
}
const [result, stauCode, Etc] = call()
console.log('result', result)
console.log('statuCode', stauCode)
console.log('Etc', Etc)