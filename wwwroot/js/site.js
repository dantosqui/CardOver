var cartaTirada=false;
var constVida = 5000
var vida1 = 100
var vida2 = 100
var vivos=true
var ismuertesubita=false;
function NoLocalStorage(){
    localStorage.setItem("vida1",100)
    localStorage.setItem("vida2",100)
    LocalStorage()
    
  
   
}

function VolverAEmpezar(){
    NoLocalStorage()
    Recargar()
}
function LocalStorage(){

    vida1 = localStorage.getItem("vida1")
    vida2 = localStorage.getItem("vida2")
    
    const perdiojug1=vida1<=0
        const perdiojug2=vida2<=0
        if(perdiojug1 && perdiojug2){
            GameOver(3)
               // $('#idModal1').modal('show')
            
                ismuertesubita=true
        } 
        else if (perdiojug1){
            GameOver(2)
        }
        else if (perdiojug2){
            GameOver(1)
        }
    SetearVida()
}
function SetearVida(){
    $("#progressBar1").css({"width": vida1 + "%"});  
    $("#progressBar2").css({"width": vida2 + "%"});  
}
function TirarCarta(idCarta, jugador,puedeTirar){
    const carta = document.getElementById(idCarta)
    let cartaTirada 
    let divdelmedio
    if(idCarta <4){
        cartaTirada = document.getElementById('cartaTirada1')
        divdelmedio=document.getElementById('divdelmedio1')}
    else{
        cartaTirada = document.getElementById('cartaTirada2')
        divdelmedio=document.getElementById('divdelmedio2')}
        const lugarCarta = "lugarCarta_" + idCarta
        
    if(puedeTirar.innerHTML == "verdadero" && vivos){
        const tirarAudio = new Audio('https://dl.vgmdownloads.com/soundtracks/plants-vs.-zombies-2009-gamerip-pc-ios-x360-ps3-ds-android-mobile-psvita-xbox-one-ps4-switch/yytiqdghnq/SFX%20paper.mp3')
        tirarAudio.play()
        divdelmedio.appendChild(carta)
        puedeTirar.innerHTML = "falso"
        cartaTirada.innerHTML = idCarta
    }else if (idCarta == cartaTirada.innerHTML && vivos){
        document.getElementById(lugarCarta).appendChild(carta)
        puedeTirar.innerHTML = "verdadero"
    }



 }


function TirarDado(){
    const rnd1 = Math.floor(Math.random() * 5);
    const rnd2 = Math.floor(Math.random() * 5);

    const divdelmedio1=document.getElementById("divdelmedio1")
    const divdelmedio2=document.getElementById("divdelmedio2")
    const carta1=divdelmedio1
    const carta2=divdelmedio2
    
    
    const danio1 = rnd1*carta1.querySelectorAll(".danio")[0].innerHTML
    const danio2 = rnd2*carta2.querySelectorAll(".danio")[0].innerHTML
    const defensa1 = rnd1*carta1.querySelectorAll(".defenza")[0].innerHTML
    const defensa2 = rnd2*carta2.querySelectorAll(".defenza")[0].innerHTML
    let danioRecibeTotal1
    let danioRecibeTotal2
    if(danio2-defensa1>=0 && danio2-defensa1<(vida1/100)*constVida)
    danioRecibeTotal1 = danio2-defensa1
    else{
        if(danio2-defensa1 <=0){
            danioRecibeTotal1=0
        }else
        danioRecibeTotal1 = (vida1/100)*constVida
    }


    if(danio1-defensa2 >= 0 && danio1-defensa2<(vida2/100)*constVida)
    danioRecibeTotal2 = danio1-defensa2
   else{
        if(danio1-defensa2 <= 0){
            danioRecibeTotal2 = 0
        }else
        danioRecibeTotal2 = (vida2/100)*constVida
    }
 

    if (!ismuertesubita)
    {
        vida1 -= (danioRecibeTotal1/constVida)*100
        vida2 -= (danioRecibeTotal2/constVida)*100

        document.getElementById("spannum1").innerHTML=rnd1
        document.getElementById("spannum2").innerHTML=rnd2
        document.getElementById("spandefensa1").innerHTML=defensa1
        document.getElementById("spandefensa2").innerHTML=defensa2
        document.getElementById("dañototal1").innerHTML="-" +danioRecibeTotal1
        document.getElementById("dañototal2").innerHTML="-" + danioRecibeTotal2   


        /*NO ME SALE LO TERMINO DESPUES */ //salio o no?? parece que anda -dante

        //That's what
        //-she
        SetearVida()
        window.localStorage.setItem("vida1",vida1)
        window.localStorage.setItem("vida2",vida2)
        document.getElementById("progressBar1").style.width = vida1

        const perdiojug1=vida1<=0
        const perdiojug2=vida2<=0
    
  


    if(perdiojug1 && perdiojug2){ 
    GameOver(0)
       // $('#idModal1').modal('show')
    
        ismuertesubita=true
    }
    
    else if (perdiojug1){
        GameOver(2)
    }
    else if (perdiojug2){
        GameOver(1)
    }
    else{
    RecargarCarta()
    }


    }
    else{

        if (danioRecibeTotal1>danioRecibeTotal2)
            GameOver(2)
        else
            GameOver(1)
        
    }
}



function ObtenerLugarCarta(){

}
//constante de lista de canciones
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
function ObtenerCarta(carta,cartaID,lugarCarta,puedeTirar,opt){

    $.ajax(
        {
            type: 'GET',
            dataType: 'JSON', 
            url: '/Home/RecargarCarta',
            data: {opt:opt}, 
            success: 
            function (response)
            {
           
               
               
            
              
                document.getElementById(lugarCarta).appendChild(carta)
               puedeTirar.innerHTML = "verdadero"
              
                
                $("#cartaImagen_" + cartaID).attr("src", response.ImagenCarta)
                
                $("#cartaNombre_" + cartaID).html(response.nombre)
               
                $("#puntosAtaque_" + cartaID).html(response.puntosAtaque)
             
                $("#puntosDefensa_" + cartaID).html(response.puntosDefensa)

                $("#tipoCarta_" + cartaID).html(response.tipoCarta)


            }
        }
    )
}

 function RecargarCarta(){
    const carta1ID = document.getElementById("cartaTirada1").innerHTML
    const carta1 = document.getElementById(carta1ID)
    const puedeTirar1 = document.getElementById("puedeTirar1")
    const puedeTirar2 = document.getElementById("puedeTirar2")
               const lugarCarta1 = "lugarCarta_" + carta1ID

               const carta2ID = document.getElementById("cartaTirada2").innerHTML
              
               const carta2 = document.getElementById(carta2ID)
            
               const lugarCarta2 = "lugarCarta_" + carta2ID
               const opt1 = carta1ID<3 ? 0:1
               const opt2 = carta2ID<7 ? 0:1
               console.log(opt1)
                ObtenerCarta(carta1,carta1ID,lugarCarta1, puedeTirar1,opt1)
              

                ObtenerCarta(carta2,carta2ID,lugarCarta2,puedeTirar2,opt2)
               
             
              // RecargarEspecial()
//esto esta a medio hacer
   
} 

//el nombre "gameOver hace referencia a CardOver: el juego de cartas por HalfOver, la mitad de HangOver"
//bien pensado woody :v V:p
function GameOver(jug){
    vivos=false

    document.getElementById("gameover").hidden = false;
   // window.location.assign("GameOver?jug="+jug)
   const ganador = document.getElementById("ganador")
   if(jug==0){
    ganador.innerHTML= "Empate"
   }else if(jug==1){
    ganador.innerHTML="Gana jugador 1"
   }else{
    ganador.innerHTML="Gana jugador 2"
   }
    NoLocalStorage()
    


}







function Recargar() {
location.reload();
}
function Empezar(uno,dos){
if(localStorage.length == 0){
        NoLocalStorage()
   }else{
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