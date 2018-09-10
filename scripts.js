var elCells = document.getElementsByClassName("lineCell");
var btnPlay = document.getElementById("play");

btnPlay.addEventListener("click", startGame);
function startGame(){    
    var contentName = document.getElementById("inputName").value;
    if(contentName){
    document.getElementById("title").textContent = contentName+"'s Memory Game";}
}

for(var i = 0 ; i<elCells.length;i++){
    elCells[i].addEventListener("click", placeImg);}

// Placing the image in the board
function placeImg(){
        var numero = this.textContent;
        console.log(numero);
        var card = document.createElement("img");
        var fishImage = "images/fish"+numero+".jpg";
        card.src = fishImage;
        this.appendChild(card);
        
       }

