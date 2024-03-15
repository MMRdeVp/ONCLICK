//EL JUGADOR TIENE QUE CLICAR EL BOTON "100 VECES" MIENTRAS APARECEN MENSAJES
let clickCount = 0;

// Función para manejar el clic en el div
document.getElementById('RedButton').addEventListener('click', function() {
    clickCount++; // Incrementa el contador de clics
    // Si el contador alcanza cierto valor, muestra el texto en el otro div
    /*if (clickCount % 5 === 0) {
        document.getElementById('Texto2').textContent = 'Texto que aparece cada 5 clics';
    }*/
    document.getElementById('Contador2').textContent = clickCount;

    if (clickCount === 20){
        document.getElementById('Texto2').textContent = 'Sigue jugando...';
    }
    if (clickCount === 40){
        document.getElementById('Texto2').textContent = 'Ya te queda menos...';
    }
    if (clickCount === 60){
        document.getElementById('Texto2').textContent = 'Cada vez estás más cerca...';
    }
    if (clickCount === 80){
        document.getElementById('Texto2').textContent = 'Solo un poco más...';
    }
    if (clickCount >= 100){
        document.getElementById('Texto2').textContent = 'FIIIIN';
        document.getElementById('Contador2').textContent = "100";
    }
    if(clickCount === 101){
        creditos();
    }
    
});

function creditos(){
    window.location.href = "../../html/Creditos.html";  
}
