/* pagina historia */ 
let video=document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");


playBoton.addEventListener('click',()=>{
    video.play()
  
});

pauseBoton.addEventListener('click',()=>{
    video.pause();
    flag=false;
});

