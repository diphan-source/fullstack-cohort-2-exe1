

const hexColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const color = document.querySelector(".color");

const btn = document.querySelector(".btn");

btn.addEventListener('click',()=>{
    let randomColor = "#";
     for (let i = 0; i < 6 ; i++){
        randomColor += hexColor[generateColor()];  
     }
     
     document.body.style.backgroundColor = randomColor;
     color.textContent = randomColor;

})

function generateColor(){
    return Math.floor(Math.random()* hexColor.length);
}