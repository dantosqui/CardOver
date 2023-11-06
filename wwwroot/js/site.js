// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function TirarCarta(idCarta, jugador){

const cartaid= jugador + ' ' + idCarta

const carta = document.getElementById(cartaid)
console.log(carta)

document.getElementById('divdelmedio').appendChild(carta)

}

function TirarDado(jugador, idCarta){
    const rnd = Math.floor(Math.random() * 5);
    
}

function Duelo(idCartaJug1, idCartaJug2){

}

function ReiniciarPartida(){
    localStorage.empty()
    
    location.reload()
    
}