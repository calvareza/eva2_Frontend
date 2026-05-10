document.addEventListener('DOMContentLoaded', function () {

    // 0. MOSTRAR FORMULARIO SI LA URL CONTIENE EL HASH
    if (window.location.hash === '#form-contacto') {
        const formContacto = document.getElementById('form-contacto');
        if (formContacto) {
            formContacto.classList.remove('hidden');
            formContacto.setAttribute('aria-hidden', 'false');
            setTimeout(function() {
                formContacto.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }

    // 1. LÓGICA DEL FORMULARIO DE CONTACTO
    const form = document.getElementById('contacto');
    if (form) {
        form.addEventListener('submit', function (event) {
            // Detener el envío automático
            event.preventDefault();

            // Obtener valores y limpiar espacios
            const nombre = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('phone').value.trim();

            // Validación de campos vacíos
            if (nombre === "") {
                alert("⚠️ Por favor, ingrese su nombre completo.");
                return;
            }

            // Validación de nombre y apellido (al menos dos palabras)
            const nombreParts = nombre.split(/\s+/);
            if (nombreParts.length < 2) {
                alert("⚠️ Por favor, ingrese su nombre completo (nombre y apellido).");
                return;
            }

            if (email === "") {
                alert("⚠️ Por favor, ingrese su correo electrónico.");
                return;
            }

            if (telefono === "") {
                alert("⚠️ Por favor, ingrese su teléfono.");
                return;
            }

            // Validación de cantidad de dígitos en teléfono (deben ser 9)
            const digitosTelefono = telefono.replace(/\D/g, "");
            if (digitosTelefono.length !== 9) {
                alert("⚠️ Por favor, ingrese un teléfono válido con 9 dígitos numéricos.");
                return;
            }

            // Validación estricta de formato de correo
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("⚠️ Por favor, ingrese un correo electrónico válido (ejemplo: correo@dominio.com).");
                return;
            }

            // Si todo está correcto
            alert("✅ Formulario enviado con éxito. Nos contactaremos con usted a la brevedad.");

            // Reiniciar el formulario tras el éxito
            form.reset();

            // Ocultar el formulario después del envío
            const formContainer = document.getElementById('form-contacto');
            if (formContainer) {
                formContainer.classList.add('hidden');
            }
            setTimeout(function () {
                window.location.href = "#";
            }, 500);
        });
    }

    // 2. RESALTAR CARD DE INFORMACIÓN (al hacer clic en el link del nav)
    const linkInfo = document.getElementById('link-info');
    if (linkInfo) {
        linkInfo.addEventListener('click', function () {
            const contactCard = document.querySelector('.contact-card');
            if (contactCard) {
                contactCard.classList.add('highlight');
                setTimeout(function () {
                    contactCard.classList.remove('highlight');
                }, 2000);
            }
        });
    }

    // 3. RESALTAR SECCIÓN DE SERVICIOS (al hacer clic en el link del nav)
    const linkServicios = document.getElementById('link-servicios');
    if (linkServicios) {
        linkServicios.addEventListener('click', function () {
            const servicesSection = document.getElementById('servicios');
            if (servicesSection) {
                servicesSection.classList.add('highlight');
                setTimeout(function () {
                    servicesSection.classList.remove('highlight');
                }, 2000);
            }
        });
    }

    // 4. MOSTRAR/OCULTAR FORMULARIO DE CONTACTO
    const linkContacto = document.getElementById('link-contacto');
    if (linkContacto) {
        linkContacto.addEventListener('click', function (e) {
            e.preventDefault();
            const formContacto = document.getElementById('form-contacto');
            if (formContacto) {
                formContacto.classList.toggle('hidden');
                const isHidden = formContacto.classList.contains('hidden');
                formContacto.setAttribute('aria-hidden', isHidden);

                if (!isHidden) {
                    formContacto.scrollIntoView({ behavior: 'smooth' });
                }

                const contactCard = document.querySelector('.contact-card');
                if (contactCard) {
                    contactCard.classList.add('highlight');
                    setTimeout(function () {
                        contactCard.classList.remove('highlight');
                    }, 2000);
                }
            }
        });
    }

    // 5. TOGGLE DE MODO OSCURO
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark');
            if (document.body.classList.contains('dark')) {
                this.textContent = '🌙';
            } else {
                this.textContent = '☀️';
            }
        });
    }

    // 6. RESALTAR CARDS DE SERVICIOS (Lógica de las 4 cards nuevas)
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function () {
            // Quitar resaltado de todas las demás
            serviceCards.forEach(c => c.classList.remove('card-active'));
            // Aplicar resaltado a la actual
            this.classList.add('card-active');
        });
    });
});