// EL JUGADOR TIENE QUE ARRASTRAR EL BOTON HASTA EL UN PUNTO CONCRETO

var contenedor = document.getElementById('TTablero');
var caja = document.getElementById('RedButton');
var meta = document.getElementById('Meta');

var limiteIzquierdo = 95;
var limiteSuperior = 50;
var limiteDerecho = contenedor.clientWidth - limiteIzquierdo;
var limiteInferior = contenedor.clientHeight - (limiteSuperior + 30);

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

  // Verificar si el botón está dentro del área de la meta
  var redButtonRect = caja.getBoundingClientRect();
  var metaRect = meta.getBoundingClientRect();

  if (
    redButtonRect.left > metaRect.left &&
    redButtonRect.right < metaRect.right &&
    redButtonRect.top > metaRect.top &&
    redButtonRect.bottom < metaRect.bottom
  ) {
    // Si el botón está dentro del área de la meta, activar hover y click

    var hoverRule = '#RedButton:hover { content: url(\'/img/prohibido.png\'); }';
    var clickedRule = '#RedButton.clicked { box-shadow: none; background-color: rgb(197, 20, 20); }';

    function addCssRule(rule) {
      var styleSheet = document.styleSheets[0];

      styleSheet.insertRule(rule, styleSheet.cssRules.length);
    }

    function removeCssRule(rule) {
      var styleSheet = document.styleSheets[0];

      for (var i = 0; i < styleSheet.cssRules.length; i++) {
        var cssRule = styleSheet.cssRules[i];

        if (cssRule.cssText === rule) {
          styleSheet.deleteRule(i);
          break;
        }
      }
    }

    removeCssRule(hoverRule);
    removeCssRule(clickedRule);

    addCssRule(hoverRule);
    addCssRule(clickedRule);

    nivel2();

  } else {
    // Si el botón no está dentro del área de la meta, desactivar hover y click
    var styleSheet = document.styleSheets[0]; 

    for (var i = 0; i < styleSheet.cssRules.length; i++) {
      var rule = styleSheet.cssRules[i];

      if (rule.selectorText === '#RedButton:hover' || rule.selectorText === '#RedButton.clicked') {
        styleSheet.deleteRule(i);
      }
    }

  }
});

//CODIGO PARA DETECTAR CUANDO TOCA LAS BARRERAS
document.getElementById("RedButton").addEventListener("mousemove", function (event) {
  var redButtonRect = event.target.getBoundingClientRect();
  var barreraRect1 = document.getElementById("Barrera1").getBoundingClientRect();
  var barreraRect2 = document.getElementById("Barrera2").getBoundingClientRect();
  var barreraRect3 = document.getElementById("Barrera3").getBoundingClientRect();
  var barreraRect4 = document.getElementById("Barrera4").getBoundingClientRect();

  if (
    redButtonRect.left < barreraRect1.right &&
    redButtonRect.right > barreraRect1.left &&
    redButtonRect.top < barreraRect1.bottom &&
    redButtonRect.bottom > barreraRect1.top
  ) {
    location.reload();
  }
  if (
    redButtonRect.left < barreraRect2.right &&
    redButtonRect.right > barreraRect2.left &&
    redButtonRect.top < barreraRect2.bottom &&
    redButtonRect.bottom > barreraRect2.top
  ) {
    location.reload();
  }
  if (
    redButtonRect.left < barreraRect3.right &&
    redButtonRect.right > barreraRect3.left &&
    redButtonRect.top < barreraRect3.bottom &&
    redButtonRect.bottom > barreraRect3.top
  ) {
    location.reload();
  }
  if (
    redButtonRect.left < barreraRect4.right &&
    redButtonRect.right > barreraRect4.left &&
    redButtonRect.top < barreraRect4.bottom &&
    redButtonRect.bottom > barreraRect4.top
  ) {
    location.reload();
  }
});

function nivel2(){
  window.location.href = "../NIVELES/LVL2.html"; 
}