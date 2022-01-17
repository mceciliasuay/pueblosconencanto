var presentacion = document.getElementById('presentacion');
var alarcon = document.getElementById('alarcon');
var belmonte = document.getElementById('belmonte');
var sisante = document.getElementById('sisante');
var sanclemente = document.getElementById('sanclemente');
var huete = document.getElementById('huete');
var contraportada = document.getElementById('contraportada');
var efecto= new Audio('camera-flash.mp3');

presentacion.style.display='block';
presentacion.style.animation='arribaNormal 5s'
alarcon.style.display='none';
belmonte.style.display='none';
sisante.style.display='none';
sanclemente.style.display='none';
huete.style.display='none';
contraportada.style.display='none';

// lanazamos
presentacion.addEventListener('click', cambiarEscena_1_2)
alarcon.addEventListener('click', cambiarEscena_2_3)
belmonte.addEventListener('click', cambiarEscena_3_4)
sisante.addEventListener('click', cambiarEscena_4_5)
sanclemente.addEventListener('click', cambiarEscena_5_6)
huete.addEventListener('click', cambiarEscena_6_7)
contraportada.addEventListener('click', cambiarEscena_7_1)


// funciones
function cambiarEscena_1_2(){
    presentacion.style.display='none';
    alarcon.style.display='block';
   alarcon.style.animation='izquierdaNormal 5s'
   alarcon.firstElementChild.style.animation='arribaNormal 5s';
   efecto.play();
}
function cambiarEscena_2_3(){
    alarcon.style.display='none';
    belmonte.style.display='block';
    efecto.play();
}
function cambiarEscena_3_4(){
    belmonte.style.display='none';
    sisante.style.display='block';
    efecto.play();
}
function cambiarEscena_4_5(){
    sisante.style.display='none';
    sanclemente.style.display='block';
    efecto.play();
}
function cambiarEscena_5_6(){
    sanclemente.style.display='none';
    huete.style.display='block';
    efecto.play();
}
function cambiarEscena_6_7(){
    huete.style.display='none';
    contraportada.style.display='block';
    efecto.play();
}
function cambiarEscena_7_1(){
    contraportada.style.display='none';
    presentacion.style.display='block';
    efecto.play();
}
///reproductor musica
var audio = document.querySelector('audio');
var icono = document.querySelector('#audio i');
icono.addEventListener('click', reproducirMusica)
function reproducirMusica(){
    if(audio.paused){
        audio.play();
        icono.className='bi bi-pause-circle';
        icono.setAttribute('title', 'parar música')
    }else{
        audio.pause();
        icono.className='bi bi-play-circle';
        icono.setAttribute('title', 'reproducir música')

        
        
    }
  

}



