// Menú 
const hamburger = document.getElementById('hamburger');
const navMovil = document.getElementById('movil');

if (hamburger && navMovil) {
    hamburger.addEventListener('click', () => {
        const open = navMovil.classList.toggle('open');
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
    });

    navMovil.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            navMovil.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', e => {
        if (!hamburger.contains(e.target) && !navMovil.contains(e.target)) {
            navMovil.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

// Entradas
const PRECIO_GENERAL = 8;
const PRECIO_REDUCIDA = 5;

const selectGeneral = document.getElementById("general");
const selectReducida = document.getElementById("reducida");
const totalSpan = document.getElementById("total");
const formulario = document.getElementById("entradas");

function calcularTotal() {
    const cantidadGeneral = parseInt(selectGeneral.value);
    const cantidadReducida = parseInt(selectReducida.value);

    const total = (cantidadGeneral * PRECIO_GENERAL) + (cantidadReducida * PRECIO_REDUCIDA);

    totalSpan.textContent = total.toFixed(2) + " €";
}

selectGeneral.addEventListener("change", calcularTotal);
selectReducida.addEventListener("change", calcularTotal);

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const cantidadGeneral = parseInt(selectGeneral.value);
    const cantidadReducida = parseInt(selectReducida.value);

    if (cantidadGeneral === 0 && cantidadReducida === 0) {
        alert ("Por favor, selecciona al menos una entrada.");
        return;
    }

    alert(`¡Reserva confirmada, ${nombre}!\nTotal: ${totalSpan.textContent}`);
});