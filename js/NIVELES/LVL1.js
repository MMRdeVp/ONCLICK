// EL JUGADOR TIENE QUE ARRASTRAR EL BOTON HASTA EL UN PUNTO CONCRETO

var contenedor = document.getElementById('Tablero');
var caja = document.getElementById('RedButton');

var limiteIzquierdo = 0;
var limiteSuperior = 0;
var limiteDerecho = contenedor.clientWidth - caja.clientWidth;
var limiteInferior = contenedor.clientHeight - caja.clientHeight;

var isMouseDown = false;

caja.addEventListener('mousedown', function (e) {
  isMouseDown = true;
});

document.addEventListener('mouseup', function () {
  isMouseDown = false;
});

contenedor.addEventListener('mousemove', function (e) {
  if (isMouseDown) {
    var nuevoLeft = Math.min(Math.max(e.clientX - contenedor.offsetLeft, limiteIzquierdo), limiteDerecho);
    var nuevoTop = Math.min(Math.max(e.clientY - contenedor.offsetTop, limiteSuperior), limiteInferior);

    caja.style.left = nuevoLeft + 'px';
    caja.style.top = nuevoTop + 'px';
  }
});