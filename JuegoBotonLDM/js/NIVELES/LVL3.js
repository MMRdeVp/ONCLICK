// Obtener referencia al elemento del div
var escapeDiv = document.getElementById('RedButton');

// Agregar un evento para detectar movimientos del ratón
document.addEventListener('mousemove', function(event) {
    // Obtener la posición actual del ratón
    var mouseX = event.clientX-40;
    var mouseY = event.clientY-250;

    // Obtener la posición actual del div
    var divX = escapeDiv.offsetLeft;
    var divY = escapeDiv.offsetTop;

    // Calcular la distancia entre el ratón y el div
    var deltaX = mouseX - divX;
    var deltaY = mouseY - divY;
    var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Definir la velocidad de movimiento del div
    var speed = 15;

    // Mover el div en dirección opuesta al ratón si está demasiado cerca
    if (distance < 100) { // Cambia este valor según la distancia que desees
        // Calcular la dirección opuesta al ratón
        var directionX = divX - mouseX;
        var directionY = divY - mouseY;

        // Normalizar la dirección para mantener la misma velocidad en todas las direcciones
        var length = Math.sqrt(directionX * directionX + directionY * directionY);
        directionX /= length;
        directionY /= length;

        // Mover el div en la dirección opuesta
        escapeDiv.style.left = (divX + directionX * speed) + 'px';
        escapeDiv.style.top = (divY + directionY * speed) + 'px';

        // Mover el div en la dirección opuesta, asegurándote de que no se escape por arriba
        if (divY > 0) {
            escapeDiv.style.left = (divX + directionX * speed) + 'px';
            escapeDiv.style.top = (divY + directionY * speed) + 'px';
        }
    }
});
