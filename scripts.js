const fecha = document.querySelector('.fecha');
fecha.textContent = new Date().toLocaleDateString('es-CL');

const boton = document.getElementById("btnEnviar");
const campo = document.getElementById("mensaje");

boton.onclick = function() {
    alert("Mensaje enviado");
    campo.value = "";
}
