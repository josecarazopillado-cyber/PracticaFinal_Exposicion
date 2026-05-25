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