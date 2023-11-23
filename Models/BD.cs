using System.Data.SqlClient;
using Dapper;
public class BD{

    private static string _connectionString=@"Server=DANOSQUI20GAMER\SQLEXPRESS;DataBase=CardOver;Trusted_Connection=True;";

    public static List<Cartas> TraerCartas(){
        
        using (SqlConnection db = new SqlConnection(_connectionString)){
            string sql = "Select * from Cartas";
            return db.Query<Cartas>(sql).ToList();
        }
       
    }

    public static List<Cartas> TraerCartasEspeciales(){
        using (SqlConnection db = new SqlConnection(_connectionString)){
            string sql = "Select * from CartasEspeciales";
            return db.Query<Cartas>(sql).ToList();
        }
    }

}