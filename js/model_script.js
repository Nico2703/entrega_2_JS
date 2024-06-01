class Producto{
    constructor(nombre, categoria, descripcion, marca, precio, stock){
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }

    actualizarStock(nuevoStock){
        this.stock = this.stock - nuevoStock;
    }
}

class Pedido{
    constructor(producto, cantidad, envio, precioFinal){
        this.producto = producto;
        this.cantidad = parseInt(cantidad);
        this.envio = envio;
        this.precioFinal = precioFinal;
    }

    calcularEnvio(){
        console.log("\nSeleccione opción de envío");
        console.log("*1- Retiro en local");
        console.log("*2- Zona CABA");
        console.log("*3- Zona GBA - Todas");
        console.log("*4- Interior del país");    
    
        let opcion = prompt("Ingrese selección: ");
        switch (opcion) {
            case "1":
                return this.envio = 0;
            case "2":
                return this.envio = 1200;
            case "3":
                return this.envio = 2400;
            case "4":
                return this.envio = 5500;
            default:
                console.log("Zona no encontrada");
                return this.envio = 1;
        }
    }

    mostrarPedido(){
        let precioParcial = this.producto.precio * this.cantidad;
        let impuesto = parseFloat(precioParcial * 0.21);
        console.log("\n-> Usted a seleccionado " + this.cantidad + " unidades del Producto " + this.producto.nombre + " - " + this.producto.descripcion);
        console.log("-> Costo unitario del producto $" + this.producto.precio);
        console.log("-> Costo de la compra $" + precioParcial);
        console.log("-> Costo de envío $" + this.envio);
        console.log("-> IVA $ " + impuesto);
        this.precioFinal = precioParcial + this.envio + impuesto;
        console.log("---------------------------------------")
        console.log("-> IMPORTE TOTAL DE LA COMPRA $" + this.precioFinal)
        alert("IMPORTE TOTAL DE LA COMPRA $" + this.precioFinal)
    }
}