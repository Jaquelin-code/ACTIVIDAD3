document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const resetPasswordForm = document.getElementById('reset-password-form');
    const resetPasswordLink = document.getElementById('reset-password-link');
    const backToLoginLink = document.getElementById('back-to-login');
    const resetPasswordContainer = document.getElementById('reset-password-container');
    const loginContainer = document.querySelector('.login-container');

    // Almacenamiento de usuarios simulado
    const users = [
        { email: 'admin@tienda.com', password: 'adminpass', role: 'admin' },
        { email: 'usuario@tienda.com', password: 'userpass', role: 'user' },
    ];

    // Función para generar CAPTCHA aritmético
    function generateCaptcha(questionId, answerId) {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const question = `${num1} + ${num2}`;
        const answer = num1 + num2;

        // Guardamos la respuesta del CAPTCHA
        document.getElementById(answerId).dataset.answer = answer;

        // Mostramos la pregunta en el contenedor
        document.getElementById(questionId).textContent = question;
    }

    // Generar captchas iniciales
    generateCaptcha('captcha-question', 'captcha-answer');
    generateCaptcha('captcha-question-reset', 'captcha-answer-reset');

    // Cambio entre formularios
    resetPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginContainer.style.display = 'none';
        resetPasswordContainer.style.display = 'block';
    });

    backToLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginContainer.style.display = 'block';
        resetPasswordContainer.style.display = 'none';
    });

    // Inicio de sesión
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;
        const captchaAnswerInput = document.getElementById('captcha-answer').value;
        const correctAnswer = document.getElementById('captcha-answer').dataset.answer;

        if (captchaAnswerInput !== correctAnswer) {
            alert('Captcha incorrecto. Intenta de nuevo.');
            return;
        }

        const user = users.find((user) => user.email === emailInput && user.password === passwordInput);

        if (!user) {
            alert('Correo electrónico o contraseña incorrectos.');
            return;
        }

        alert(`Bienvenido ${user.role === 'admin' ? 'Administrador' : 'Usuario'}`);
        localStorage.setItem('role', user.role);
        window.location.href = 'index.html'; // Cambia esta URL según tu página de inicio
    });

    // Restablecimiento de contraseña
    resetPasswordForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = document.getElementById('reset-email').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const captchaAnswerInput = document.getElementById('captcha-answer-reset').value;
        const correctAnswer = document.getElementById('captcha-answer-reset').dataset.answer;

        if (captchaAnswerInput !== correctAnswer) {
            alert('Captcha incorrecto. Intenta de nuevo.');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('Las contraseñas no coinciden. Intenta de nuevo.');
            return;
        }

        // Buscar usuario por correo electrónico
        const user = users.find((user) => user.email === emailInput);

        if (!user) {
            alert('El correo electrónico no está registrado.');
            return;
        }

        // Actualizar la contraseña del usuario
        user.password = newPassword;
        alert('Contraseña restablecida exitosamente. Ahora puedes iniciar sesión con tu nueva contraseña.');

        // Regresar al formulario de inicio de sesión
        resetPasswordContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });
});
