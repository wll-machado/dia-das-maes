
const flor = document.querySelector('.flor');
const title = document.querySelector('.title');
const bida = document.querySelector('.bida');
const audio = document.querySelector('.audio');


flor.addEventListener('click', function(){

    title.style.top = "10%";
    bida.style.top = "30%";
    audio.play();



})