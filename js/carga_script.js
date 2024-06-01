const productos = [];
const producto1 = new Producto("Arroz", "Almacén", "Blanco", "Gallo", 1200, 25);
const producto2 = new Producto("Pan", "Almacén", "Lactal x 24u", "Fargo", 1830, 27);
const producto3 = new Producto("Arvejas", "Almacén", "Lata 200grs","Marolio", 670, 15);
const producto4 = new Producto("Pechuga pollo", "Carnicería", "Bandeja X Kilo", "Granja Iris", 3810, 37);
const producto5 = new Producto("Manteca", "Frescos", "200grs", "Sancor", 2200, 14);
const producto6 = new Producto("Leche", "Frescos", "Entera - Larga Vida", "Sancor", 1640, 8);
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
productos.push(producto6);

const envio = [
    {opcion: "Retiro en local", costo: 0},
    {opcion: "Zona CABA", costo: 1200},
    {opcion: "Zona GBA (Todas)", costo: 2400},
    {opcion: "Interior del país", costo: 5500},
];

const pedidos = [];