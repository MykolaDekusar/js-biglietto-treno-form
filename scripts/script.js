'use strict';
const distanza = document.getElementById('distance');
const nomeUtente = document.getElementById('userName');
const ticketToggle = document.getElementById('ticket');
const age = document.getElementById('age');
//STATIC NUMBERS
const ticketPrice = 0.21;
const discountU18 = 20;
const discountO65 = 40;

//ASSIGNING VARIABLES TO TABLE
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
            clientName.innerHTML = nomeUtente.value;
            ticketType.innerHTML = "Biglietto Standard";
            elementCarrozza.innerHTML = nCarrozza;
            elementCode.innerHTML = cpCode;
            price.innerHTML = distNum + "€";
        }
        if (etaNum < 18) {
            distNum = Math.round(((distNum * ticketPrice) - ((distNum * ticketPrice) * (discountU18 / 100))) * 100) / 100;//CALCOLO DELLO SCONTO APPROSSIMATO A 2 CIFRE DECIMALI
            console.log("Il prezzo del biglietto è di " + distNum + "€");
            clientName.innerHTML = nomeUtente.value;
            ticketType.innerHTML = "Biglietto Under 18";
            elementCarrozza.innerHTML = nCarrozza;
            elementCode.innerHTML = cpCode;
            price.innerHTML = distNum + "€";
        }
        if (etaNum > 65) {
            distNum = Math.round(((distNum * ticketPrice) - ((distNum * ticketPrice) * (discountO65 / 100))) * 100) / 100;//CALCOLO DELLO SCONTO APPROSSIMATO A 2 CIFRE DECIMALI
            console.log("Il prezzo del biglietto è di " + distNum + "€");
            clientName.innerHTML = nomeUtente.value;
            ticketType.innerHTML = "Biglietto Over 65";
            elementCarrozza.innerHTML = nCarrozza;
            elementCode.innerHTML = cpCode;
            price.innerHTML = distNum + "€";
        }
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