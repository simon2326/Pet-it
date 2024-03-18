const carru = document.querySelector('.carru');
const punto = document.querySelectorAll('.punto');

punto.forEach((puntito, i) => {
    puntito.addEventListener('click', () => {

        let posicion = i;

        // posición 0 , transformX 0%
        // posición 1, transformX -50%
        let operacion = posicion * -50;

        carru.style.transform = `translateX(${operacion}%)`;

        punto.forEach((puntito, j) => {
            punto[j].classList.remove('activo');
        });

        punto[i].classList.add('activo');

    });
});
