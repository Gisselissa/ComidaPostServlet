class Pedido{
    
    static comprar() {
    console.log("Pedido completado, aunque no este listo, falta programarlo");
    fetch("Entrega", {method: "POST"});
    }
    
    static main(){
        document.querySelector("#pedidoBtn").setAttribute("onclick","Pedido.comprar()");
    }
}

Pedido.main();


