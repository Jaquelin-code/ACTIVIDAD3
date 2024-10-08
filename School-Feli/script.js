let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombreProducto, precio) {
    const producto = {
        nombre: nombreProducto,
        precio: precio
    };
    carrito.push(producto);
    alert(`${nombreProducto} ha sido añadido al carrito`);
    mostrarCarrito(); // Actualiza la vista del carrito inmediatamente
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const resumenCarrito = document.getElementById('resumenCarrito');
    resumenCarrito.innerHTML = ''; // Limpiar contenido previo

    if (carrito.length === 0) {
        resumenCarrito.innerHTML = '<p>El carrito está vacío.</p>';
        return;
    }

    let total = 0;
    carrito.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        resumenCarrito.appendChild(productoDiv);
        total += producto.precio;
    });

    const totalDiv = document.createElement('div');
    totalDiv.textContent = `Total: $${total.toFixed(2)}`;
    resumenCarrito.appendChild(totalDiv);
}

// Llama a mostrarCarrito si hay un carrito existente al cargar la página
if (document.getElementById('resumenCarrito')) {
    mostrarCarrito();
}
