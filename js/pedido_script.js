const seleccion_1 = document.getElementById('opciones_1');

productos.forEach(objeto => {
    const opcion = document.createElement('option');
    opcion.text = objeto.nombre + ' - ' + objeto.categoria + ' - '+ objeto.descripcion + ' - ' + objeto.marca + ' - $' + objeto.precio + ' - ' + objeto.stock;
    seleccion_1.add(opcion);
});

const input_1 = document.getElementById('cantidad');
const seleccion_2 = document.getElementById('opciones_2');

envio.forEach(objeto => {
    const opcion_2 = document.createElement('option');
    opcion_2.text = objeto.opcion + ' - $' + objeto.costo;
    seleccion_2.add(opcion_2);
});

const formulario = document.getElementById('form_in');

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const productoSeleccionado = seleccion_1.value;
    const cadenaProductoSeleccionado = productoSeleccionado.split('-');
    const costoProductoSeleccionado = cadenaProductoSeleccionado[4].replace(/\$/g, '');
    let productoFinal;

    for (let index = 0; index < productos.length; index ++){
        if (productos[index].nombre.indexOf(cadenaProductoSeleccionado)){
            productoFinal = productos[index];
            break;
        }
    }

    const cantidadSeleccionada = input_1.value;
    if (cantidadSeleccionada > parseInt(productoFinal.stock)){
        alert("Error - Cantidad no disponible");
        throw new Error("Pedido terminado");
    }
    
    productoFinal.actualizarStock(cantidadSeleccionada);

    const envioSeleccionado = seleccion_2.value;
    const cadenaEnvioSeleccionado = envioSeleccionado.split('-');
    const costoEnvioSeleccionado = cadenaEnvioSeleccionado[1].replace(/\$/g, '');
    
    const precioParcialSeleccionado = parseFloat(costoProductoSeleccionado) * cantidadSeleccionada + parseFloat(costoEnvioSeleccionado);
    const precioFinalSeleccionado = precioParcialSeleccionado * 1.21;

    nuevoPedido = new Pedido(productoFinal, cantidadSeleccionada, parseFloat(costoEnvioSeleccionado), precioFinalSeleccionado);
    pedidos.push(nuevoPedido);
    console.clear();
    pedido();
    nuevoPedido.mostrarPedido();

    let contenedor = document.createElement('tr');
    let precioParcial = nuevoPedido.producto.precio * nuevoPedido.cantidad;
    contenedor.innerHTML = `<td> ${nuevoPedido.producto.nombre} </td>
                            <td> $${nuevoPedido.producto.precio} </td>
                            <td> ${nuevoPedido.cantidad} </td>
                            <td> $${nuevoPedido.envio} </td> 
                            <td> $${precioParcial} </td>
                            <td> $${nuevoPedido.precioFinal} </td>`;
    tablaBody_b.appendChild(contenedor);
});

const tabla_b = document.getElementById('table_b');
const tablaBody_b = document.createElement('tbody');
tabla_b.appendChild(tablaBody_b);
