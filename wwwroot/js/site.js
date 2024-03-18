var cartaTirada = false;
var constVida = 5000
var vida1 = 100
var vida2 = 100
var vivos = true
var ismuertesubita = false;
function NoLocalStorage() {
    localStorage.setItem("vida1", 100)
    localStorage.setItem("vida2", 100)
    LocalStorage()



}

function VolverAEmpezar() {
    NoLocalStorage()
    Recargar()
}
function LocalStorage() {

    vida1 = localStorage.getItem("vida1")
    vida2 = localStorage.getItem("vida2")

    const perdiojug1 = vida1 <= 0
    const perdiojug2 = vida2 <= 0
    if (perdiojug1 && perdiojug2) {
        GameOver(3)
        // $('#idModal1').modal('show')

        ismuertesubita = true
    }
    else if (perdiojug1) {
        GameOver(2)
    }
    else if (perdiojug2) {
        GameOver(1)
    }
    SetearVida()
}
function SetearVida() {
    if (vida1 > 0 || vida2 > 0) {
        $("#progressBar1").css({ "width": vida1 + "%" });
        $("#progressBar2").css({ "width": vida2 + "%" });
    }

    document.getElementById("cuantavida1").innerHTML = Math.round((vida1 / 100) * constVida)
    document.getElementById("cuantavida2").innerHTML = Math.round((vida2 / 100) * constVida)
}
function TirarCarta(idCarta, jugador, puedeTirar, puedeTirarEspecial) {
    const carta = document.getElementById(idCarta)
    let cartaTirada
    let divdelmedio
    if (idCarta < 4) {
        cartaTirada = document.getElementById('cartaTirada1')
        divdelmedio = document.getElementById('divdelmedio1')
    }
    else {
        cartaTirada = document.getElementById('cartaTirada2')
        divdelmedio = document.getElementById('divdelmedio2')
    }
    const lugarCarta = "lugarCarta_" + idCarta

    if (puedeTirar.innerHTML == "verdadero" && vivos) {

        //si no es una carta especial, o es una carta especial y puede tirar especiales
        if ((idCarta != 3 && idCarta != 7) || ((idCarta == 3 || idCarta == 7) && puedeTirarEspecial.innerHTML == "verdadero")) {

            const tirarAudio = new Audio('https://dl.vgmdownloads.com/soundtracks/plants-vs.-zombies-2009-gamerip-pc-ios-x360-ps3-ds-android-mobile-psvita-xbox-one-ps4-switch/yytiqdghnq/SFX%20paper.mp3')
            tirarAudio.play()
            divdelmedio.appendChild(carta)
            puedeTirar.innerHTML = "falso"
            cartaTirada.innerHTML = idCarta
        }
    } else if (idCarta == cartaTirada.innerHTML && vivos) {
        document.getElementById(lugarCarta).appendChild(carta)
        puedeTirar.innerHTML = "verdadero"
        if (idCarta == 3 || idCarta == 7) {
            puedeTirarEspecial.innerHTML = "verdadero"
        }
    }



}
let tieneEfecto1 = false
let tieneEfecto2 = false
let extra1 = 0
let extra2 = 0
let extraDefenza1 = 0
let extraDefenza2 = 0
function TirarDado() {
    extra1 = 0
    extra2 = 0
    const rnd1 = Math.floor(Math.random() * 5);
    const rnd2 = Math.floor(Math.random() * 5);

    const divdelmedio1 = document.getElementById("divdelmedio1")
    const idCarta1 = document.getElementById("divdelmedio1").childNodes[1].id
    const divdelmedio2 = document.getElementById("divdelmedio2")
    const idCarta2 = document.getElementById("divdelmedio2").childNodes[1].id
    const carta1 = divdelmedio1
    const carta2 = divdelmedio2

    if (idCarta1 == 3) {
        document.getElementById("puedeTirarEspecial1").innerHTML = "falso"
        Efecto(idCarta1, 0)
    }
    if (idCarta2 == 7) {
        document.getElementById("puedeTirarEspecial2").innerHTML = "falso"
        Efecto(idCarta2, 1)
    }

    if (tieneEfecto1)
        RealizarEfecto(efectoActual1, 0)
    if (tieneEfecto2)
        RealizarEfecto(efectoActual2, 1)

        if(aplicandoEfecto1 == true) aplicandoEfecto1=false
        if(aplicandoEfecto2 == true) aplicandoEfecto2=false


    const danio1 = rnd1 * carta1.querySelectorAll(".danio")[0].innerHTML
    const danio2 = rnd2 * carta2.querySelectorAll(".danio")[0].innerHTML
    const defensa1 = rnd1 * carta1.querySelectorAll(".defenza")[0].innerHTML
    const defensa2 = rnd2 * carta2.querySelectorAll(".defenza")[0].innerHTML
    let danioRecibeTotal1
    let danioRecibeTotal2
    if (danio2 - defensa1 >= 0)
        danioRecibeTotal1 = Math.round(danio2 - defensa1)
    else {
        danioRecibeTotal1 = 0
    }

    if (danio1 - defensa2 >= 0)
        danioRecibeTotal2 = Math.round(danio1 - defensa2)
    else {

        danioRecibeTotal2 = 0

    }
    danioRecibeTotal1 += extra2
    danioRecibeTotal2 += extra1
    danioRecibeTotal1 -=extraDefenza1
    danioRecibeTotal2 -=extraDefenza2
    console.log("extra defensa 1: " , extraDefenza1, "extradefensa 2: ", extraDefenza2)    
    if (!ismuertesubita) {
        vida1 -= (danioRecibeTotal1 / constVida) * 100
        vida2 -= (danioRecibeTotal2 / constVida) * 100

        document.getElementById("spannum1").innerHTML = rnd1
        document.getElementById("spannum2").innerHTML = rnd2
        document.getElementById("spandefensa1").innerHTML = defensa1
        document.getElementById("spandefensa2").innerHTML = defensa2
        document.getElementById("dañototal1").innerHTML = "-" + Math.round(danioRecibeTotal1)
        document.getElementById("dañototal2").innerHTML = "-" + Math.round(danioRecibeTotal2)


        /*NO ME SALE LO TERMINO DESPUES */ //salio o no?? parece que anda -dante

        //That's what
        //-she
        SetearVida()
        window.localStorage.setItem("vida1", vida1)
        window.localStorage.setItem("vida2", vida2)

        const perdiojug1 = vida1 <= 0
        const perdiojug2 = vida2 <= 0



        if (perdiojug1 && perdiojug2) {
            GameOver(0)
            // $('#idModal1').modal('show')

            ismuertesubita = true
        }

        else if (perdiojug1) {
            GameOver(2)
        }
        else if (perdiojug2) {
            GameOver(1)
        }
        else {
            RecargarCarta()
        }


    }
    else {

        if (danioRecibeTotal1 > danioRecibeTotal2)
            GameOver(2)
        else
            GameOver(1)

    }
}
let aplicandoEfecto1= false
let aplicandoEfecto2=false
let efectoActual1;
let efectoActual2;
function Efecto(idC, opt) {
    const idFinal = document.getElementById("_" + idC).innerHTML
    $.ajax(
        {
            type: 'POST',
            dataType: 'text',
            url: '/Home/ObtenerEfecto',
            data: { id: idFinal },
            success:
                function (response) {


                    if (opt == 0) {
                        efectoActual1 = response
aplicandoEfecto1 = true
                        tieneEfecto1 = true
                    } else {
                        efectoActual2 = response
                        aplicandoEfecto2=true;
                        tieneEfecto2=true
                    }






                }
        }

    )

}
let rondas1=0
let rondas2=0
function RealizarEfecto(efecto, opt) {
    let rondas
    const efectoVariables = efecto.split(',')
    
console.log("RONDAS1= "+rondas1)
console.log("RONDAS2= "+rondas2)
    if (aplicandoEfecto1) 
            rondas1 = efectoVariables[2]
    else if (aplicandoEfecto2)
            rondas2 = efectoVariables[2]

    if(rondas1>0 && opt==0)rondas1--
    if(rondas2>0 && opt==1)rondas2--



    if (efectoVariables[0] == "veneno") {

        if (opt == 0)
            extra1 = efectoVariables[1]
        else
            extra2 = efectoVariables[1]
    }else if(efectoVariables[0] == "curacion"){
        if(opt == 0){
            vida1+=(efectoVariables[1] / constVida) * 100
            SetearVida()
            window.localStorage.setItem("vida1", vida1)
        }else{
            vida2+=(efectoVariables[1] / constVida) * 100
            console.log(vida2 + " CURACION")
            SetearVida()
            window.localStorage.setItem("vida2", vida2)
        }
    }else if(efectoVariables[0] == "defenza"){
if(opt==0)
extraDefenza1 = efectoVariables[1]
else
extraDefenza2 = efectoVariables[1]
    }

    if (rondas1 == 0 && opt == 0) {
        tieneEfecto1 = false
        document.getElementById("puedeTirarEspecial1").innerHTML="verdadero"
    }
     if (rondas2==0 && opt == 1) {
        tieneEfecto2 = false
        document.getElementById("puedeTirarEspecial2").innerHTML="verdadero"
    }
    console.log(rondas + "like i love yoy")
}

function ObtenerLugarCarta() {

}
//constante de lista de canciones
const canciones = [
    "https://vgmsite.com/soundtracks/plants-vs.-zombies/vvvsnwaufk/06.%20Moongrains.mp3",
    "https://vgmsite.com/soundtracks/plants-vs.-zombies/behsmtlvrz/05.%20Loonboon.mp3",
    "https://vgmsite.com/soundtracks/plants-vs.-zombies/bgtwdvngxd/04.%20Grasswalk.mp3",
    "https://vgmsite.com/soundtracks/plants-vs.-zombies/rqnczgecuc/10.%20Ultimate%20Battle.mp3"
]
function Soundtrack(mucara) {

    const id = canciones.findIndex(x => x == mucara.src)
    if (id < 3) mucara.src = canciones[id + 1]
    else mucara.src = canciones[0]
}
function ObtenerCarta(carta, cartaID, lugarCarta, puedeTirar, opt) {

    $.ajax(
        {
            type: 'GET',
            dataType: 'JSON',
            url: '/Home/RecargarCarta',
            data: { opt: opt },
            success:
                function (response) {



                
                    document.getElementById(lugarCarta).appendChild(carta)
                    puedeTirar.innerHTML = "verdadero"

                   document.getElementById("_" + cartaID).innerHTML = response.idCarta
                    console.log(document.getElementById("_" + cartaID).innerHTML)
                    $("#cartaNombre_" + cartaID).html(response.nombre)

                    $("#puntosAtaque_" + cartaID).html(response.puntosAtaque)

                    $("#puntosDefensa_" + cartaID).html(response.puntosDefensa)

                    $("#tipoCarta_" + cartaID).html(response.tipoCarta)


                }
        }
    )
    setTimeout(() => {     ActualizarImg(cartaID,opt)}, 20);
    console.log(document.getElementById("_" + cartaID).innerHTML +" ANTES")

    
}
function ActualizarImg(cartaID,opt){
    const idReal= document.getElementById("_" + cartaID).innerHTML
    console.log(document.getElementById("_" + cartaID).innerHTML +" DESPUES")
    $.ajax(
        {
            type: 'POST',
            dataType: 'text',
            url: '/Home/RecargarImagen',
            data: {id:idReal,opt:opt},
            success:
                function (response) {
                    
                        console.log(response +"AAA")
                    $("#cartaImagen_" + cartaID).attr("src", response)

                }
        }
    )
}
function RecargarCarta() {
    const carta1ID = document.getElementById("cartaTirada1").innerHTML
    const carta1 = document.getElementById(carta1ID)
    const puedeTirar1 = document.getElementById("puedeTirar1")
    const puedeTirar2 = document.getElementById("puedeTirar2")
    const lugarCarta1 = "lugarCarta_" + carta1ID

    const carta2ID = document.getElementById("cartaTirada2").innerHTML

    const carta2 = document.getElementById(carta2ID)

    const lugarCarta2 = "lugarCarta_" + carta2ID
    const opt1 = carta1ID < 3 ? 0 : 1
    const opt2 = carta2ID < 7 ? 0 : 1
    ObtenerCarta(carta1, carta1ID, lugarCarta1, puedeTirar1, opt1)


    ObtenerCarta(carta2, carta2ID, lugarCarta2, puedeTirar2, opt2)


    // RecargarEspecial()
    //esto esta a medio hacer

}

//el nombre "gameOver hace referencia a CardOver: el juego de cartas por HalfOver, la mitad de HangOver"
//bien pensado woody :v V:pv     d:V
function GameOver(jug) {
    vivos = false

    document.getElementById("gameover").hidden = false;
    // window.location.assign("GameOver?jug="+jug)
    const ganador = document.getElementById("ganador")
    if (jug == 0) {
        ganador.innerHTML = "Empate"
    } else if (jug == 1) {
        ganador.innerHTML = "Gana jugador 1"
    } else {
        ganador.innerHTML = "Gana jugador 2"
    }
    NoLocalStorage()



}

//eu sabes que bueno 


function SetearColorEspecial(carta) {
    carta.style.backgroundColor = "#bea962"
}


function Recargar() {
    location.reload();
}
function Empezar(uno, dos) {
    const cartaEsp11 = document.getElementById(3).getElementsByClassName("card")[0]
    const cartaEsp12 = document.getElementById("puntosAtaque_3")
    const cartaEsp13 = document.getElementById("puntosDefensa_3")
    const cartaEsp21 = document.getElementById(7).getElementsByClassName("card")[0]
    const cartaEsp22 = document.getElementById("puntosAtaque_7")
    const cartaEsp23 = document.getElementById("puntosDefensa_7")
    SetearColorEspecial(cartaEsp11)
    SetearColorEspecial(cartaEsp12)
    SetearColorEspecial(cartaEsp13)
    SetearColorEspecial(cartaEsp21)
    SetearColorEspecial(cartaEsp22)
    SetearColorEspecial(cartaEsp23)
    if (localStorage.length == 0) {
        NoLocalStorage()
    } else {
        LocalStorage()
    }

}
/*
function GuardarCartasStorage(uno,dos){

}*/


//bre
//bre
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ jesse estoy en cardover
// ⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠆⠜⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⠿⠿⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿
// ⣿⣿⡏⠁⠀⠀⠀⠀⠀⣀⣠⣤⣤⣶⣶⣶⣶⣶⣦⣤⡄⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿
// ⣿⣿⣷⣄⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⡧⠇⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣾⣮⣭⣿⡻⣽⣒⠀⣤⣜⣭⠐⢐⣒⠢⢰⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿⣿⣿⡟⣾⣿⠂⢈⢿⣷⣞⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣷⣶⣾⡿⠿⣿⠗⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠻⠋⠉⠑⠀⠀⢘⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⡿⠟⢹⣿⣿⡇⢀⣶⣶⠴⠶⠀⠀⢽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⡿⠀⠀⢸⣿⣿⠀⠀⠣⠀⠀⠀⠀⠀⡟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⡿⠟⠋⠀⠀⠀⠀⠹⣿⣧⣀⠀⠀⠀⠀⡀⣴⠁⢘⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿
// ⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⠗⠂⠄⠀⣴⡟⠀⠀⡃⠀⠉⠉⠟⡿⣿⣿⣿⣿
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⠾⠛⠂⢹⠀⠀⠀⢡⠀⠀⠀⠀⠀⠙⠛⠿⢿