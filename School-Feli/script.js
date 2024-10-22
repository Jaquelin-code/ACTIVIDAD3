let carrito = [];

function agregarAlCarrito(nombreProducto, precio) {
    const producto = {
        nombre: nombreProducto,
        precio: precio
    };
    carrito.push(producto);
    alert(`${nombreProducto} ha sido añadido al carrito`);
    mostrarCarrito(); 
}


function mostrarCarrito() {
    const resumenCarrito = document.getElementById('resumenCarrito');
    resumenCarrito.innerHTML = ''; 

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


if (document.getElementById('resumenCarrito')) {
    mostrarCarrito();
}

function enviarMensaje() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert(`Mensaje enviado:\nNombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);
        
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

