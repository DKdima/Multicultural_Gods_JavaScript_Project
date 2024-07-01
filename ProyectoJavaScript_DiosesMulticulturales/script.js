const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const acceptCheckbox = document.querySelector('.accept-checkbox');
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

acceptCheckbox.addEventListener('change', () => {
    if (acceptCheckbox.checked) {
        alert('En esta web estamos especialmente sensibilizados con la protección de datos de los USUARIOS de los servicios a los que pueden acceder a través de nuestra página web. Según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (RGPD) y en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y Garantía de Derechos Digitales (LOPDGDD), mediante la presente Política de Privacidad (en adelante Política), informa a los USUARIOS del sitio web es la responsable del tratamiento y usos que a los que se someten los datos de carácter personal que se recaban en la web, con la finalidad formativa y que al aceptar la presente Política, el USUARIO acepta el tratamiento de sus datos en los términos definidos en ella.');
    } else {
        window.location.href = 'Pagina 1 -principal-.html';
    }
});

//control de formulario



const loginForm = document.querySelector('.form-box-login form');
const registerForm = document.querySelector('.form-box-register form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = loginForm.querySelector('input[type="email"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (!isEmailValid(emailValue)) {
    alert('El correo electrónico no tiene un formato válido.');
    return;
  }

  if (!isPasswordValid(passwordValue)) {
    alert('La contraseña debe tener al menos 7 caracteres, una letra en minúscula, un número o carácter especial.');
    return;
  }

  if (emailValue === 'prueba@prueba.com' && passwordValue === 'Prueba1@') {
    alert('Inicio de sesión exitoso.');
     window.location.href = 'form.html';
  } else {
    alert('Credenciales incorrectas. Inténtalo de nuevo.');
  }
});

function isEmailValid(email) {
  return true;
}

function isPasswordValid(password) {
  return true;
}


registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = registerForm.querySelector('input[type="email"]');
  const usernameInput = registerForm.querySelector('input[type="text"]');
  const passwordInput = registerForm.querySelector('input[type="password"]');
  const termsInput = registerForm.querySelector('input[type="checkbox"]');

  const emailValue = emailInput.value;
  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;

  if (!isEmailValid(emailValue)) {
    alert('El correo electrónico no tiene un formato válido.');
    return;
  }

  if (!isUsernameValid(usernameValue)) {
    alert('El nombre de usuario debe comenzar con mayúscula.');
    return;
  }

  if (!isPasswordValid(passwordValue)) {
    alert('La contraseña debe tener al menos 7 caracteres, una letra en minúscula, un número o carácter especial.');
    return;
  }

  if (!termsInput.checked) {
    alert('Debes aceptar los términos y condiciones.');
    return;
  }

  alert('Su solicitud de registro fue creada exitosamente.');

  var email = emailValue;
  var username = usernameValue;
  var password = passwordValue;

  var subject = "Solicitud de registro";
  var body = "Email: " + email + "\n" +
              "Usuario: " + username + "\n" +
              "Contraseña: " + password;

  var mailtoLink = "mailto:diosesmulticulturales@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  window.open(mailtoLink);
});

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isUsernameValid(username) {
  return /^[A-Z]/.test(username);
}

function isPasswordValid(password) {
  return /^(?=.*[a-z])(?=.*[0-9!@#$%^&*])(?=.{7,})/.test(password);
}