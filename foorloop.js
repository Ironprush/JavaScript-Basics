// const days = ['Mon','Tue','Wed','Thus','Fri','Sat']
// for (let i = days.length-1; i >=0; i--) {
//     console.log(days[i])
// }

const myTodos = []

myTodos.push('buy bread')
myTodos.push('record video for youtube')
myTodos.push('go to gym')

myTodos.forEach(function(todo,index){
console.log(`Your task number ${index+1} is: ${todo}`);
})