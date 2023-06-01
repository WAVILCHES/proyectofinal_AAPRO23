/* Evento onclick para acceder a la página por edad */

function verificarUsuario() {
  let edad = prompt("Primero decinos, ¿Cuál es tu edad?:");

  if (edad >= 18) {
    window.location.href = "./pages/home.html";
  } else {
    let confirmacion = confirm("El sitio contiene contenido para mayores de 18 años. Podés acceder bajo tu propia responsabilidad.");
    if (confirmacion) {
      window.location.href = "./pages/home.html";
    }
  }
}

/* Evento onclick para acceder a la página por edad */


/* Evento onclick para salida del sitio a Instragram*/

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

/* Evento onclick para salida del sitio a Instragram*/

/* Evento onclick para salida del sitio a Facebook */

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

/* Evento onclick para salida del sitio a Facebook */

/* Evento onclick para salida del sitio a Youtube */

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

/* Evento onclick para salida del sitio a Youtube */

/* Evento onclick para salida del sitio a chat de WhatsApp */
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

/* Evento onclick para salida del sitio a chat de WhatsApp */
