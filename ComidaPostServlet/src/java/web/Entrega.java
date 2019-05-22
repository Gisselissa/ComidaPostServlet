package web;

import com.google.gson.Gson;
import entidades.Pedido;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "Entrega", urlPatterns = {"/Entrega"})
public class Entrega extends HttpServlet {
Gson convertir = new Gson();       
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Estas en el método GET del server");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Estas en el POST del Server");
        String resultadoJson = req.getReader().readLine();
        
        Pedido miPedido = convertir.fromJson(resultadoJson, Pedido.class);
        
        System.out.println(resultadoJson);
        System.out.println("El pedido del cliente es: " + resultadoJson);
        
        System.out.println("El precio es: " + miPedido.getPrecio());
        System.out.println("La descripcion es: " + miPedido.getDescripcion());
        System.out.println("El combo es: " + miPedido.getCombo());
    }
}
