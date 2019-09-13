// ! reverse the condition like if the condition is false and you put
// this ! into the condition then the condition became true.
// && - AND operator - both side need to be true
// || - OR operator - one side need to be true

let isverified = true
let islogged = true
let payment = true
let isguest = true

if (isverified && islogged && payment){
    console.log('greeting message to user')
    console.log('grant access to paid course')
} else if(isverified || isguest){
    console.log('allow free previews')
} else {
    console.log('MESSAGE: please contact admin')
}