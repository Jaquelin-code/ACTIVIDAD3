function procesarLogin() {
    const email = document.getElementById('email').value; // Cambiado a 'email'
    const password = document.getElementById('password').value;
    const captcha = document.getElementById('captcha').value;

    // Validación CAPTCHA
    if (captcha !== '7') {
        alert("Respuesta incorrecta en el CAPTCHA. Intente de nuevo.");
        return;
    }

    // Validación de credenciales (ejemplo básico)
    if (email === "loki@gmail.com" && password === "contraseña") { // Cambiado el valor a validar
        alert("Inicio de sesión exitoso");
        window.location.href = "index.html"; // Redirige a la página principal
    } else {
        alert("Correo o contraseña incorrectos."); // Mensaje actualizado
    }
}

