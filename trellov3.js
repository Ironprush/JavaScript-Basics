let mytodo = {
    day:'monday',
    meeting:0,
    meetdone:0,

    addmeeting: function(num){
        this.meeting = this.meeting + num
    },
     
    summary: function(){
        return `you have ${this.meeting} meetings today`
    }
}

mytodo.addmeeting(4)
console.log(mytodo.summary());