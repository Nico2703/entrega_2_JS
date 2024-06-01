
// let seguir = prompt("Ingrese cualquier tecla para ingresar productos o 'N' para cancelar: ");
// if (seguir == null){
//     alert("Ingreso terminado");
//     throw new Error("Ingreso terminado");
// }
// seguir = seguir.toUpperCase();
// if (seguir == "N"){
//     console.log("-- Ingreso terminado --");
//     alert("Ingreso terminado");
// }
// while (seguir != 'N'){
//     nuevoProducto = crearProducto();
//     productos.push(nuevoProducto);
//     let seguir = prompt("Ingrese cualquier tecla para ingresar otro producto o 'N' para cancelar: ");
//     if (seguir == null){
//         alert("Ingreso terminado");
//         throw new Error("Ingreso terminado");
//     }
//     seguir = seguir.toUpperCase();
//     if (seguir == "N"){
//         console.log("-- Ingreso terminado --");
//         alert("Ingreso terminado");
//         break;
//     }
// }

const tabla = document.getElementById('table')
const tablaBody = document.createElement('tbody')
tabla.appendChild(tablaBody)

for (const producto of productos) {
    let contenedor = document.createElement('tr');
    contenedor.innerHTML = `<td> ${producto.nombre} </td>
                            <td> ${producto.categoria} </td>
                            <td> ${producto.descripcion} </td> 
                            <td> ${producto.marca} </td> 
                            <td> $${producto.precio} </td>
                            <td> ${producto.stock} </td>`;
    tablaBody.appendChild(contenedor);
}
