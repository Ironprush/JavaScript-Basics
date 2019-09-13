let mytodo = {
    day:'monday',
    meeting:0,
    meetdone:0,
}
let addmeeting = function(todo,meet=0){
    todo.meeting = todo.meeting + meet
}

let meetdone = function(todo,meet = 0){
    todo.meetdone = todo.meetdone - meet
}

let restday = function(todo){
    todo.meeting = 0
    todo.meetdone = 0
}
let getsummeryofday = function(todo){
    let meetleft = todo.meeting - todo.meetdone
    return `you have ${meetleft} meetings today!`
}
addmeeting(mytodo,4)

addmeeting(mytodo,4)

meetdone(mytodo,4)
getsummeryofday(mytodo)
console.log(getsummeryofday(mytodo));