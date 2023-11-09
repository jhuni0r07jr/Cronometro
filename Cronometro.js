var Minutos = 0;
var Segundos = 0;
var Horas = 0;
var interval;


function Start(){
    interval = setInterval(watch, 10);
}

function pause(){
    clearInterval(interval);
}

function Stop(){
    Segundos = 0;
    Minutos = 0;
    Horas = 0;
}
 
function watch(){
Segundos++;

    if(Segundos == 60){
        Minutos++;
        Segundos = 0;

        if(Minutos == 60){
            Horas++;
            Minutos = 0;
        }
    }
    document.getElementById('watch').innerText = Horas + ':' + Minutos+':'+ Segundos;
}