function crearUsuario(email, password, role = 'usuario') {
    return {
        email: email,
        password: password,
        role: role,
        isAuthenticated: false
    };
}

function procesarLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const captcha = document.getElementById('captcha').value;

    if (captcha !== '7') {
        alert("Respuesta incorrecta en el CAPTCHA. Intente de nuevo.");
        return;
    }

    // Ejemplo de credenciales y roles
    let usuario;
    if (email === "admin@tienda.com" && password === "adminpass") {
        usuario = crearUsuario(email, password, 'administrador');
    } else if (email === "usuario@tienda.com" && password === "userpass") {
        usuario = crearUsuario(email, password, 'usuario');
    } else {
        alert("Correo o contraseña incorrectos.");
        return;
    }

    usuario.isAuthenticated = true;
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
    alert("Inicio de sesión exitoso");
    window.location.href = 'index.html';
}


