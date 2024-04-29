'use strict';

const genera = document.getElementById('upload');
const distanza = document.getElementById('distance');
const eta = document.getElementById('age');
const nomeUtente = document.getElementById('userName');
const ticketPrice = 0.21;
const discountU18 = 20;
const discountO65 = 40;
const nCarrozza = Math.ceil(Math.random() * 10);
const cpCode = Math.ceil(Math.random() * 100000);

//AL CLICK DI GENERA MODIFICO I DATI IN NUMERI
genera.addEventListener('click', function () {
    let distNum = Number(distanza.value);
    const etaNum = Number(eta.value);
    console.log(distNum);
    console.log(etaNum);
    console.log(nomeUtente.value);
    //VERIFICA INSERIMENTO DATI
    if (!(distNum <= 0) && !(etaNum < 0) && !(distNum === NaN) && !(etaNum === NaN)) {

        //VERIFICA ETA
        if (etaNum >= 18 && etaNum <= 65) {
            distNum = Math.round((distNum * ticketPrice) * 100) / 100;
            console.log("Il prezzo del biglietto è di " + distNum + "€");
            document.getElementById('clientName').innerHTML = nomeUtente.value;
            document.getElementById('ticketType').innerHTML = "Biglietto Standard";
            document.getElementById('nCarrozza').innerHTML = nCarrozza;
            document.getElementById('cpCode').innerHTML = cpCode;
            document.getElementById('price').innerHTML = distNum + "€";
        }
        if (etaNum < 18) {
            distNum = Math.round(((distNum * ticketPrice) - ((distNum * ticketPrice) * (discountU18 / 100))) * 100) / 100;//CALCOLO DELLO SCONTO APPROSSIMATO A 2 CIFRE DECIMALI
            console.log(distNum);
        }
        if (etaNum > 65) {
            distNum = Math.round(((distNum * ticketPrice) - ((distNum * ticketPrice) * (discountO65 / 100))) * 100) / 100;//CALCOLO DELLO SCONTO APPROSSIMATO A 2 CIFRE DECIMALI
            console.log(distNum);
        }
    } else {
        alert("Inserisci bene i dati");
    }
})


function svuota() {
    nomeUtente.value = '';
    distanza.value = '';
    eta.value = '';
}