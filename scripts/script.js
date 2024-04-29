'use strict';

const genera = document.getElementById('upload');
const svuota = document.getElementById('svuota');
let distanza = document.getElementById('distance');
const eta = document.getElementById('age');
const nomeUtente =

    //AL CLICK DI GENERA MODIFICO I DATI IN NUMERI
    genera.addEventListener('click', function () {
        const distNum = Number(distanza.value);
        const etaNum = Number(eta.value);
        console.log(distNum);
        console.log(etaNum);
    })


svuota.addEventListener('click', function () {
    distanza.reset();
})