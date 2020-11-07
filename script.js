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
var container=$(".container");


setInterval(function(){
    timeEl.text(moment().format("dddd, MMMM Do h:m" ))
    hour=moment().format("h"); 
    displayColors();
},1000)

function displayColors(){
    for(var i = 0;i<blockArr.length;i++){
    if(blockArr[i].data("time") == hour){
       var timeBlock = blockArr[i];
        blockArr[i].css("background-color", "red");
        for(var j = 0;j<blockArr.length;j++){
            console.log(blockArr[j].data("block"));
            console.log(timeBlock.data("block"));
            if(blockArr[j].data("block")>timeBlock.data("block")){
                blockArr[j].css("background-color", "green");
            }
        }
    }
}
}
