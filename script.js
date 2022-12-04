let character = document.getElementById("character");
let block = document.getElementById("block");

function jump(){
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },700);
}

let count = 0;
let checkDead = setInterval(function(countScore){
    let characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<30 && blockLeft>0 && characterTop >= 130) {
        character.style.display = "none";
        block.style.animation = "none";
        block.style.display = "none";
        window.alert("You lose!");
        stopWork();
    }else{
        count++;
        let temp=count/10;
        document.getElementById("score").style.textAlign = "center";
        document.getElementById("score").style.paddingTop= "10px";
        document.getElementById("score").innerHTML = "Score: "+ temp.toFixed();
    }
},10);

function stopWork(){
    clearInterval(checkDead);
}
