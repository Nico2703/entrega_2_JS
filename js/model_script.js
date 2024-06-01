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