
function TirarCarta(idCarta, jugador){

const cartaid= jugador + ' ' + idCarta

const carta = document.getElementById(cartaid)
console.log(carta)


const divdelmedio=document.getElementById('divdelmedio')

divdelmedio.appendChild(carta)


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