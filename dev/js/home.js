const carru = document.querySelector('.carru');
const punto = document.querySelectorAll('.punto');

punto.forEach((puntito, i)=>{
    punto[i].addEventListener('click', ()=>{
        let posicion = i
        //posicion 0 , transformX 0%
        //posición 1, transformX -50%
        let operacion = posicion*-50

        carru.style.transform = `translateX(${operacion}%)`

    })
} )