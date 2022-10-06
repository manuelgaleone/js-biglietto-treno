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

//Richiesta d'età
let etaPasseggero = Number(prompt("Quanti anni hai?"));
console.log("Il passeggero ha" + " " + etaPasseggero + " " + "anni.")
let chilometri = prompt("Quanti chilometri vuoi percorrere?");
console.log("Il passeggero vuole percorrere" + " " + chilometri + ".")

