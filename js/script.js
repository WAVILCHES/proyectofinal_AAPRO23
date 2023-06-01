/* Evento onclick para salida del sitio */

const enlace = document.getElementById("ig");
  enlace.onclick = function() {
    return confirmarSalidaIg();
  };

  function confirmarSalidaIg() {
    let confirmacion = confirm("Estás saliendo de Palas del Paraná. ¿Querés continuar?");
    if (confirmacion) {
      window.open(enlace.href, '_blank');
    }
    return false;
 }
  
const enlace2 = document.getElementById("fb");
  enlace2.onclick = function() {
    return confirmarSalidaFb();
  };

  function confirmarSalidaFb() {
    let confirmacion = confirm("Estás saliendo de Palas del Paraná. ¿Querés continuar?");
    if (confirmacion) {
      window.open(enlace2.href, '_blank');
    }
    return false;
 }

const enlace3 = document.getElementById("yt");
  enlace3.onclick = function() {
    return confirmarSalidaYt();
  };

  function confirmarSalidaYt() {
    let confirmacion = confirm("Estás saliendo de Palas del Paraná. ¿Querés continuar?");
    if (confirmacion) {
      window.open(enlace3.href, '_blank');
    }
    return false;
 }

const enlace4 = document.getElementById("wa");
  enlace4.onclick = function() {
    return confirmarSalidaWa();
  };

  function confirmarSalidaWa() {
    let confirmacion = confirm("Estás saliendo de Palas del Paraná. ¿Querés continuar?");
    if (confirmacion) {
      window.open(enlace4.href, '_blank');
    }
    return false;
  }
