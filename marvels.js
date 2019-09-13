// const superhero = ['Ironman','Spiderman','Thor','Capt. Amercia']
// console.log(superhero)
// console.log(superhero[0])
// console.log(superhero.length)
// console.log(superhero[superhero.length - 1])
// //console.log('we have three superhero')
// //console.log(`we have ${3+5} superhero`)
// console.log(`we have ${superhero.length} superhero`)





const number = ['one', 'two','three','four','five','six']
number[1] = 'saurabh'
console.log(number)

// start
// shift is used for remove the first element from the array
// unshift is used for add thr first element from the array

number.shift
console.log(number)
number.unshift('saurabh')
console.log(number)

//end
// pop is used to remove the element from last position
// push is used to add the element from last possition

 number.pop()
 console.log(number)
 number.push('seven')
 console.log(number)

 //middle
// splice is used to add or remove the element the element form the
// array

number.splice(2,2,'saurabh')
console.log(number)