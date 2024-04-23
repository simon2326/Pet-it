document.addEventListener("DOMContentLoaded", function () {

  const mesesContainer = document.querySelector('.meses'); // Contenedor de todos los meses
  const meses = mesesContainer.querySelectorAll('.mes'); // NodeList de todos los elementos con clase 'mes'
  let currentMonth = 1; // Suponiendo que febrero es el mes inicial (índice 1)
  const dias = document.querySelectorAll('.dia');

  // Establecer un día como el día principal inicialmente
  dias[0].classList.add('dia-principal');

  function moveLeft() {
    console.log("Izquierda");
    currentMonth--;
    if (currentMonth === -1) {
      currentMonth = meses.length - 1; // Ir al último mes si estamos al principio
      mesesContainer.scrollLeft = mesesContainer.scrollWidth; // Desplazar hacia el final
    } else {
      mesesContainer.scrollLeft -= meses[currentMonth].clientWidth; // Desplazar hacia la izquierda por el ancho de un mes
    }
    //updateMainMonth();
  }

  function moveRight() {
    console.log("Der");
    currentMonth++;
    if (currentMonth === meses.length) {
      currentMonth = 0; // Ir al primer mes si estamos al final
      mesesContainer.scrollLeft = 0; // Desplazar hacia el principio
    } else {
      mesesContainer.scrollLeft += meses[currentMonth].clientWidth; // Desplazar hacia la derecha por el ancho de un mes
    }
    //updateMainMonth();
  }

  function updateMainMonth() {
    console.log("Actualizar");
    console.log(meses[currentMonth]);
    // Eliminar la clase 'mes_principal' de todos los meses
    meses.forEach(month => {
      month.classList.remove('mes-principal');
      month.classList.add('mes');
    });
    // Agregar la clase 'mes_principal' al mes en la posición actual
    meses[currentMonth].classList.remove('mes');
    meses[currentMonth].classList.add('mes-principal');

  }

  function updateMainDay(clickedDay) {
    // Eliminar la clase 'dia-principal' de todos los días
    dias.forEach(dia => {
      dia.classList.remove('dia-principal');
      dia.classList.add('dia');
    });
    
    // Agregar la clase 'dia-principal' al día clicado
    clickedDay.classList.remove('dia');
    clickedDay.classList.add('dia-principal');
  }

  document.getElementById('mes_anterior').addEventListener('click', function () {
    moveLeft();
    updateMainMonth();
    meses[currentMonth];
    meses[currentMonth + 1]
  });

  document.getElementById('mes_siguiente').addEventListener('click', function () {
    moveRight();
    updateMainMonth();
    meses[currentMonth];
    meses[currentMonth - 1]
  });

  // Agregar event listener a cada elemento de día
  dias.forEach(dia => {
    dia.addEventListener('click', function () {
      updateMainDay(dia);
    });
  });
});
