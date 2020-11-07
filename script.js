var timeEl=$("#currentDay");
var hour= 0;
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

// Update time element and call dispaly color
setInterval(function(){
    timeEl.text(moment().format("dddd, MMMM Do h:m" ))
    hour=moment().format("h"); 
    displayColors();
},1000)
//color the current hour block red and future blocks green
function displayColors(){
    for(var i = 0;i<blockArr.length;i++){
    if(blockArr[i].data("time") == hour){
       var timeBlock = blockArr[i];
        blockArr[i].css("background-color", "red");
        blockArr[i].find("input").css("background-color", "red");
        for(var j = 0;j<blockArr.length;j++){
            if(blockArr[j].data("block")>timeBlock.data("block")){
                blockArr[j].css("background-color", "green");
                blockArr[j].find("input").css("background-color", "green");
            }
        }
    }
}
}
//event listener that delegates to buttons, saves input to local storage
container.on( "click", "button", function(event){
   var task= $(event.target).parent().parent().find("input").val();
   var blockNum=$(event.target).parent().parent().data("block");
   localStorage.setItem(blockNum, task);
})

//pulls from local storage
for(var i=0;i<blockArr.length;i++){
    blockArr[i].find("input").attr("placeholder", localStorage.getItem(blockArr[i].data("block")));
}