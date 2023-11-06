// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function TirarCarta(idCarta, jugador){

const cartaid=jugador + ' ' + idCarta

const carta = document.GetElementById(cartaid)

document.getElementById('divdelmedio').appendChild(carta)

}

function Duelo(idCartaJug1, idCartaJug2){

}

function ReiniciarPartida(){
    localStorage.empty()
    
    location.reload()
    
}