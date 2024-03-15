//EL JUGADOR TIENE QUE ENCONTRAR EL BOTON EN LA OSCURIDAD
const conteDegradado = document.querySelector('body');
const sizeDegradado = 100;


conteDegradado.addEventListener('mousemove', (e) => {
    const x = e.clientX
    const y = e.clientY
    conteDegradado.style.cursor = "none"
    console.log(x, y)
    conteDegradado.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, rgb(31, 40, 71) ${sizeDegradado}px)`
})

const boton = document.querySelector('#RedButton')

function nivel3(){
    window.location.href = "../NIVELES/LVL3.html"; 
}