using Microsoft.AspNetCore.Mvc;

namespace TPBase.Controllers;

public class HomeController : Controller
{
    Random rand = new Random(); 

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Jugar()
    {
        
        List<Carta> Cartas = BD.TraerCartas();
        List<Carta> CartasJug1 = new List<Carta>();
        List<Carta> CartasJug2 = new List<Carta>();

        
        
        return View();
    }


}
