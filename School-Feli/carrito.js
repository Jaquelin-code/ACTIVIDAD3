function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const tbodyCarrito = document.getElementById('tbodyCarrito');
    const totalPrecio = document.getElementById('totalPrecio');

    tbodyCarrito.innerHTML = ''; 
    let total = 0;

    carrito.forEach((item, index) => {
        const tr = document.createElement('tr');
        const totalItem = item.precio * item.cantidad;
        total += totalItem;

        tr.innerHTML = `
            <td>${item.producto}</td>
            <td>$${item.precio.toFixed(2)}</td>
            <td><input type="number" value="${item.cantidad}" min="1" class="cantidad-input" data-index="${index}"></td>
            <td>$${totalItem.toFixed(2)}</td>
            <td><button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
        `;
        tbodyCarrito.appendChild(tr);
    });

    totalPrecio.textContent = total.toFixed(2);
}

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1); 
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    cargarCarrito(); 
}

function enviarPedido() {
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;

    if (nombre && direccion && telefono) {
        alert(`Pedido enviado:\nNombre: ${nombre}\nDirección: ${direccion}\nTeléfono: ${telefono}`);
        localStorage.removeItem('carrito'); 
        cargarCarrito(); 
    } else {
        alert('Por favor, complete todos los campos.');
    }
}


window.onload = cargarCarrito;
