var cartaTirada=false;


function TirarCarta(idCarta, jugador,puedeTirar){
    console.log("tirar carta error")
    const carta = document.getElementById(idCarta)
    let cartaTirada 
    if(idCarta <4)
        cartaTirada = document.getElementById('puedeTirar1')
    else
        cartaTirada = document.getElementById('puedeTirar2')
        const lugarCarta = "lugarCarta_" + idCarta
        const divdelmedio=document.getElementById('divdelmedio')
    if(puedeTirar.innerHTML == "verdadero"){
        const tirarAudio = new Audio('https://dl.vgmdownloads.com/soundtracks/plants-vs.-zombies-2009-gamerip-pc-ios-x360-ps3-ds-android-mobile-psvita-xbox-one-ps4-switch/yytiqdghnq/SFX%20paper.mp3')
        tirarAudio.play()
        divdelmedio.appendChild(carta)
        puedeTirar.innerHTML = "falso"
        cartaTirada.innerHTML = idCarta
    }else if (idCarta == cartaTirada.innerHTML){
        document.getElementById(lugarCarta).appendChild(carta)
        puedeTirar.innerHTML = "verdadero"
    }

 }


var constVida = 5000
var vida1 = 100
var vida2 = 100


function TirarDado(){
    console.log("tirar dado error")
    const rnd1 = Math.floor(Math.random() * 5);
    const rnd2 = Math.floor(Math.random() * 5);
    console.log(rnd1 + "DADO 1 RESULTADO DADO")

    const divdelmedio=document.getElementById("divdelmedio")
    const cartas=divdelmedio.querySelectorAll(".card")
    const carta1=cartas[0]
    const carta2=cartas[1]
    
    
    const danio1 = rnd1*carta1.querySelectorAll(".danio")[0].innerHTML
    const danio2 = rnd2*carta2.querySelectorAll(".danio")[0].innerHTML
    const defensa1 = rnd1*carta1.querySelectorAll(".defenza")[0].innerHTML
    const defensa2 = rnd2*carta2.querySelectorAll(".defenza")[0].innerHTML
    let danioRecibeTotal1
    let danioRecibeTotal2
    if(danio2-defensa1>=0)
    danioRecibeTotal1 = danio2-defensa1
    else
    danioRecibeTotal1 = 0


    if(danio1-defensa2>=0)
    danioRecibeTotal2 = danio1-defensa2
    else
    danioRecibeTotal2 = 0

    vida1 -= (danioRecibeTotal1/constVida)*100
    vida2 -= (danioRecibeTotal2/constVida)*100
        
    document.getElementById("daño1").innerHTML="daño 1:" + danio1;
    document.getElementById("daño2").innerHTML="daño 2:"+ danio2;
    document.getElementById("defensa1").innerHTML="defensa 1:"+ defensa1;
    document.getElementById("defensa2").innerHTML="defensa 2:" + defensa2;
    document.getElementById("num2").innerHTML="dado 2:"+ rnd2;
    document.getElementById("num1").innerHTML="dado 1:"+ rnd1;
    $('#idModal').modal('show')

    console.log(danioRecibeTotal1)
    console.log(vida1)

    /*NO ME SALE LO TERMINO DESPUES */
    $("#progressBar1").css({"width": vida1 + "%"});  
    $("#progressBar2").css({"width": vida2 + "%"});  
    document.getElementById("progressBar1").style.width = vida1
    console.log(document.getElementById("progressBar1"))
}

// function Duelo(idCartaJug1, idCartaJug2){

// }


function ReiniciarPartida(){
    localStorage.empty()
    
    location.reload()
    
}

const canciones = [
    "https://vgmsite.com/soundtracks/plants-vs.-zombies/vvvsnwaufk/06.%20Moongrains.mp3",
    "https://vgmsite.com/soundtracks/plants-vs.-zombies/behsmtlvrz/05.%20Loonboon.mp3",
"https://vgmsite.com/soundtracks/plants-vs.-zombies/bgtwdvngxd/04.%20Grasswalk.mp3",
"https://vgmsite.com/soundtracks/plants-vs.-zombies/rqnczgecuc/10.%20Ultimate%20Battle.mp3"
]
function Soundtrack(mucara){
const id = canciones.findIndex(x => x == mucara.src)
if(id <3) mucara.src = canciones[id+1]
else mucara.src = canciones[0]
}

 function RecargarCarta(){
//esto esta a medio hacer
    $.ajax(
        {
            type: 'GET',
            dataType: 'JSON', 
            url: '/Home/RecargarCarta',
            data: {}, 
            success: 
            function (response)
            {
                const carta1ID = document.getElementById("cartaTirada1").innerHTML
                const carta2ID = document.getElementById("cartaTirada2").innerHTML
               
               document.getElementById("lugarCarta_" + carta1ID).appendChild(document.getElementById(carta1ID))
               document.getElementById("lugarCarta_" + carta2ID).appendChild(document.getElementById(carta2ID))
                document.getElementById("puedeTirar1").innerHTML = "verdadero"
                document.getElementById("puedeTirar2").innerHTML = "verdadero"
                

            }
        }
    )
} 