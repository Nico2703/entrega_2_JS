function pedido(){
    console.log("-- Detalle de pedido --");
}

// function crearProducto(){
//     const nombre = prompt("Ingrese nombre del producto: ");
//     const categoria = prompt("Ingrese categoría del producto: ");
//     const descripcion = prompt("Ingrese descripcion del producto: ");
//     const precio= parseFloat(prompt("Ingrese precio del producto: "));
//     const stock = parseInt(prompt("Ingrese cantidad en stock: "));
//     return new Producto(nombre, categoria, descripcion, precio, stock);
// }

function producto(productos){
    console.log("Seleccione el producto deseado");

    for (let i=0; i<productos.length; i++){
        console.log("Selección - " + i);
        console.log(productos[i]);
    }

    let seleccion = prompt("Ingrese selección: ");
    if (productos[seleccion] == null){
        alert("Producto no encontrado");
        return null;
    }
    else{
        return productos[seleccion];
    }
}

function crearPedido(producto){
    const cantidad= parseInt(prompt("Ingrese cantidad requerida del producto: "));
    return new Pedido(producto, cantidad, 0, 0);
}


