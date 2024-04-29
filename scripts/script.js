'use strict';
const distanza = document.getElementById('distance');
const nomeUtente = document.getElementById('userName');
const ticketToggle = document.getElementById('ticket');
const age = document.getElementById('age');
//STATIC NUMBERS
const ticketPrice = 0.21;
const discountU18 = 20;
const discountO65 = 40;

//ASSIGNING TABLE VARIABLES
const clientName = document.getElementById('clientName');
const ticketType = document.getElementById('ticketType');
const elementCarrozza = document.getElementById('nCarrozza');
const elementCode = document.getElementById('cpCode');
const price = document.getElementById('price');

//GENERATE FUNCTION 
function genera() {
    //RANDOM NUMBERS
    const nCarrozza = Math.ceil(Math.random() * 10);
    const cpCode = Math.ceil(Math.random() * 100000);
    //
    let distNum = Number(distanza.value);
    const etaNum = Number(age.value);
    console.log(nomeUtente.value);
    console.log(distNum);
    console.log(etaNum);
    //VERIFICA INSERIMENTO DATI
    if (!(distNum <= 0) && !(etaNum < 0) && !(distNum === NaN) && !(etaNum === NaN)) {
        ticketToggle.classList.remove("display-none");
        //VERIFICA ETA
        if (etaNum >= 18 && etaNum <= 65) {
            distNum = Math.round((distNum * ticketPrice) * 100) / 100;
            console.log("Il prezzo del biglietto è di " + distNum + "€");
            ticketType.innerHTML = "Biglietto Standard";
        }
        if (etaNum < 18) {
            distNum = Math.round(((distNum * ticketPrice) - ((distNum * ticketPrice) * (discountU18 / 100))) * 100) / 100;//CALCOLO DELLO SCONTO APPROSSIMATO A 2 CIFRE DECIMALI
            console.log("Il prezzo del biglietto è di " + distNum + "€");
            ticketType.innerHTML = "Biglietto Under 18";
        }
        if (etaNum > 65) {
            distNum = Math.round(((distNum * ticketPrice) - ((distNum * ticketPrice) * (discountO65 / 100))) * 100) / 100;//CALCOLO DELLO SCONTO APPROSSIMATO A 2 CIFRE DECIMALI
            console.log("Il prezzo del biglietto è di " + distNum + "€");
            ticketType.innerHTML = "Biglietto Over 65";
        }
        clientName.innerHTML = nomeUtente.value;
        elementCarrozza.innerHTML = nCarrozza;
        elementCode.innerHTML = cpCode;
        price.innerHTML = distNum + "€";
    } else {
        alert("Inserisci bene i dati");
    }
}
//RESET FUNCTION FOR THE RESET BUTTON
function svuota() {
    ticketToggle.classList.add("display-none");
    nomeUtente.value = '';
    distanza.value = '';
    age.value = '';
}