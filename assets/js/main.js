/* ISTRUZIONI:
Il programma dovrà chiedere all'utente:
 - Il numero di chilometri che vuole percorrere
 - L'età del passeggero.

 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 - Il prezzo del biglietto è definito in base ai km (0.21 € al km)
 - Va applicato uno sconto del 20% per i minorenni
 - Va applicato uno sconto del 40% per gli over 65.

 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

//Dati
let prezzoChilometri = 0.21

//Richiesta d'età
let etaPasseggero = Number(prompt("Quanti anni hai?"));
let chilometri = Number(prompt("Quanti chilometri vuoi percorrere?"));

//Calcolo prezzo

let prezzo = chilometri * prezzoChilometri
let costoFinale

//Calcolo sconto minorenni 20%
if (etaPasseggero < 18) {

    costoFinale = prezzo - (prezzo * 20 / 100)     

} else if (etaPasseggero > 65) {

    costoFinale = prezzo - (prezzo * 40 / 100)  

} else {

    costoFinale = prezzo
    
}

//Comunicazione prezzo
document.getElementById('comunicazione').innerHTML = "Dovrai pagare in totale:" + " " + (costoFinale).toFixed(2) + "euro."