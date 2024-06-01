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
