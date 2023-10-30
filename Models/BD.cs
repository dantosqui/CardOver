using System.Data.SqlClient;
using Dapper;
public class BD{

    private static string _connectionString=@"Server=.;DataBase=CardOver;Trusted_Connection=True;";

    public static List<Carta> TraerCartas(){
        using (SqlConnection db = new SqlConnection(_connectionString)){
            string sql = "Select * from Cartas";
            return db.Query<Carta>(sql).ToList();
        }
    }

}