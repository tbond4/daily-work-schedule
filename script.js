var timeEl=$("#currentDay");

setInterval(function(){
    timeEl.text(moment().format("dddd, MMMM Do h:m" ))
})

