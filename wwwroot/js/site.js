let cartaTirada=false;
function TirarCarta(idCarta, jugador,puedeTirar){

const carta = document.getElementById(idCarta)

const divdelmedio=document.getElementById('divdelmedio')
if(puedeTirar.innerHTML == "verdadero"){
    divdelmedio.appendChild(carta)
    puedeTirar.innerHTML = "falso"
}
 }

function TirarDado(){
    const rnd1 = Math.floor(Math.random() * 5);
    const rnd2 = Math.floor(Math.random() * 5);

    const divdelmedio=document.getElementById("divdelmedio")
    const carta1=divdelmedio.firstChild
    const carta2=divdelmedio.lastChild
    
    console.log(carta1)
    const daño = carta1.getElementsByClassName("daño").innerHTML
    console.log(daño) 
}

function Duelo(idCartaJug1, idCartaJug2){

}

function ReabastecerCarta(){
    

}

function ReiniciarPartida(){
    localStorage.empty()
    
    location.reload()
    
}

const canciones = [
    "https://vgmsite.com/soundtracks/plants-vs.-zombies/vvvsnwaufk/06.%20Moongrains.mp3",
    "https://vgmsite.com/soundtracks/plants-vs.-zombies/behsmtlvrz/05.%20Loonboon.mp3",
"https://vgmsite.com/soundtracks/plants-vs.-zombies/bgtwdvngxd/04.%20Grasswalk.mp3",
"https://vgmsite.com/soundtracks/plants-vs.-zombies/rqnczgecuc/10.%20Ultimate%20Battle.mp3",

]
function Soundtrack(){

}