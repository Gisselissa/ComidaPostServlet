class Pedido {

    static comprar() {
        // 1- Tomar datos de los inputs que ingreso el usuario 
        // 2- Crear un objeto de JS con essos datos
        let comida = {};
        comida.precio = document.querySelector("#precio").value;
        comida.descripcion = document.querySelector("#descripcion").value;
        comida.combo = document.querySelector("#combo").value;
        console.log(comida);
        // 
        // 3- Convertir en objeto de JS a Json
        let comidaJson = JSON.stringify(comida);
        console.log(comidaJson);

        // 4- Enviar el Json al servidor con FETCH
        fetch("Entrega",
                {method: "POST",
                    body: comidaJson;
                });
    }

    static main() {
        document.querySelector("#pedidoBtn").setAttribute("onclick", "Pedido.comprar()");
    }

    static ejemploDeObjeto() {
        let comida = {};
        comida.descripcion = "5 kilos de papas. 2 de zanahorias. 1 Sandia";
        comida.precio = 200;
        comida.combo = "Combo 1";
        console.log(comida);
    }

}

Pedido.main();


