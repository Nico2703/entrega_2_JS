// seguir = prompt("Ingrese cualquier tecla para realizar un pedido o 'N' para cancelar: ");
// if (seguir == null){
//     alert("Pedido terminado");
//     throw new Error("Pedido terminado");
// }

// seguir = seguir.toUpperCase();
// if (seguir== "N"){
//     console.log("-- Pedido terminado --");
//     alert("Pedido terminado");
// }

// while (seguir != 'N'){
//     console.clear();
//     pedido();  
//     const informacionProducto = producto(productos);
//     if (informacionProducto == null){
//         alert("Error - Revisa los datos ingresados");
//         break;
//     }
//     else{
//         nuevoPedido = crearPedido(informacionProducto);
//         if (nuevoPedido.cantidad > informacionProducto.stock){
//             alert("Cantidad no disponible");
//             break;
//         }
//         else{
//             nuevoPedido.calcularEnvio();
//             if (nuevoPedido.envio == 1){
//                 alert("Error - Revisa los datos ingresados");
//                 break;
//             }
//             else{
//                 nuevoPedido.mostrarPedido();
//                 informacionProducto.stock = informacionProducto.stock - nuevoPedido.cantidad;
//                 pedidos.push(nuevoPedido);
//                 for (let j=0; j<pedidos.length; j++){
//                     console.log(pedidos[j]);
//                 }
//             }   
//         }
//     }

//     let seguir = prompt("Ingrese cualquier tecla para realizar otro pedido o 'N' para cancelar: ");
//     if (seguir == null){
//         alert("Pedido terminado");
//         throw new Error("Pedido terminado");
//     }
//     seguir = seguir.toUpperCase();
//     if (seguir == "N"){
//         console.log("-- Pedido terminado --");
//         alert("Pedido terminado");
//         break;
//     }
// }

var seleccion_1 = document.getElementById('opciones_1');

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
            console.log(productoFinal);
            break;
        }
    }

    //const productoFinal = new Producto(cadenaProductoSeleccionado[0],cadenaProductoSeleccionado[1],cadenaProductoSeleccionado[2],cadenaProductoSeleccionado[3],costoProductoSeleccionado,cadenaProductoSeleccionado[5]);

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

// for (const pedido of pedidos) {
//     let contenedor = document.createElement('tr');
//     let precioParcial = pedido.producto.precio * pedido.cantidad;
//     contenedor.innerHTML = `<td> ${pedido.producto.nombre}} </td>
//                             <td> $${pedido.producto.precio}} </td>
//                             <td> ${pedido.cantidad} </td>
//                             <td> $${pedido.envio} </td> 
//                             <td> $${precioParcial} </td>
//                             <td> $${pedido.precioFinal} </td>`;
//     tablaBody_b.appendChild(contenedor);
// }

