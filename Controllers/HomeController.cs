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

    

    public IActionResult ComoJugar(){
        return View();
    }

    public Cartas RecargarCarta(){
        Console.WriteLine("recargarcarta corrido");
        List<Cartas> listaCartasa = BD.TraerCartas();
        Random rnd = new Random();
        int r = rnd.Next(listaCartasa.Count);

        Cartas cartaResultado = new Cartas();
        cartaResultado = listaCartasa[r];
        Console.WriteLine("Carta resultado: " + cartaResultado);
        return cartaResultado;
    }


}
