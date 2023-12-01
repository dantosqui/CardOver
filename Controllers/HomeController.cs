using Microsoft.AspNetCore.Mvc;

namespace cardover.Controllers;

public class HomeController : Controller
{
    Random rand = new Random(); 

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Jugar()
    {
        const int CantidadCartas = 3; //esaa

        List<Cartas> listaCartas = BD.TraerCartas();
        List<Cartas> CartasEspeciales = BD.TraerCartasEspeciales();
        List<Cartas> CartasJug1 = new List<Cartas>();
        List<Cartas> CartasJug2 = new List<Cartas>();
        
        for (int i = 0; i<CantidadCartas; i++){
            CartasJug1.Add(listaCartas[rand.Next(listaCartas.Count)]);
            CartasJug2.Add(listaCartas[rand.Next(listaCartas.Count)]);
        }

        CartasJug1.Add(CartasEspeciales[rand.Next(CartasEspeciales.Count)]);
        CartasJug2.Add(CartasEspeciales[rand.Next(CartasEspeciales.Count)]);
        
        ViewBag.Cartas1=CartasJug1;
        ViewBag.Cartas2=CartasJug2;
        
      
        return View("Juego");
    }

    
public string ObtenerEfecto(int id){
    Cartas carta = BD.TraerCartasEspeciales().Find(x => x.idCarta == id);
    Console.WriteLine(carta.Habilidad);
    return carta.Habilidad;
}
    public IActionResult ComoJugar(){
        return View();
    }

    public Cartas RecargarCarta(int opt){
            Random rnd = new Random();
              List<Cartas> listaCartasa ;
        if(opt == 0){
         listaCartasa = BD.TraerCartas();}
        else
        listaCartasa = BD.TraerCartasEspeciales();
        int r = rnd.Next(listaCartasa.Count);
           Cartas cartaResultado = new Cartas();
        cartaResultado = listaCartasa[r];
        
          TempData["img"] = cartaResultado.ImagenCarta;
        return cartaResultado;
      
     
        
    }
    public string RecargarImagen(int id, int opt){
      if(opt==0)
        return BD.TraerCartas().Find(x => x.idCarta == id).ImagenCarta;
        else
         return BD.TraerCartasEspeciales().Find(x => x.idCarta == id).ImagenCarta;

    }

    public IActionResult GameOver(int jug){
        ViewBag.Ganador="Jugador " + jug;
        return View();
    }
}
