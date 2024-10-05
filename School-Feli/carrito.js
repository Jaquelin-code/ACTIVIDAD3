// Leer el carrito del localStorage
function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const carritoTabla = document.getElementById('carrito-tabla-body');
    const totalElement = document.getElementById('precio-total');
    let total = 0;

    // Limpiar la tabla antes de agregar nuevos elementos
    carritoTabla.innerHTML = '';

    // Recorrer los productos del carrito y agregarlos a la tabla
    carrito.forEach((item, index) => {
        const fila = document.createElement('tr');

        // Insertar los datos del producto en la tabla
        fila.innerHTML = `
            <td>${item.producto}</td>
            <td>$${item.precio.toFixed(2)}</td>
            <td>${item.cantidad}</td>
            <td>$${(item.precio * item.cantidad).toFixed(2)}</td>
            <td><button onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
        `;
        carritoTabla.appendChild(fila);

        // Calcular el total
        total += item.precio * item.cantidad;
    });

    // Mostrar el precio total
    totalElement.textContent = total.toFixed(2);
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(indice) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(indice, 1); // Eliminar el producto según el índice
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito(); // Recargar el carrito
}

// Cargar el carrito cuando se cargue la página
window.onload = cargarCarrito;
