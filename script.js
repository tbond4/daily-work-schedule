var timeEl=$("#currentDay");
var hour= moment().format("h");
var nineBlock =$("#9Block");
var tenBlock=$("#10Block");
var elevenBlock=$("#11Block");
var twelveBlock=$("#12Block");
var oneBlock=$("#1Block");
var twoBlock=$("#2Block");
var threeBlock=$("#3Block");
var fourBlock=$("#4Block");
var fiveBlock=$("#5Block");
var blockArr=[nineBlock,tenBlock,elevenBlock,twelveBlock,oneBlock,twoBlock,threeBlock,fourBlock,fiveBlock]
setInterval(function(){
    timeEl.text(moment().format("dddd, MMMM Do h:m" ))
    hour=moment().format("h");
    
})
for(var i = 0;i<blockArr.length;i++){
    
    console.log(blockArr[i].data("time"));
    console.log(hour);
    if(blockArr[i].data("time") == hour){
       
        blockArr[i].css("background-color", "red");
    }
}

