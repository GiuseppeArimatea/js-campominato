// generare 16 numeri casuali da 1 a 100
var numeriRandom = []
var numeri= numeriRandom + random(0,100); // creiamo una varibiale e la uniamo con la funzione "random"
console.log(numeriRandom);



// chiedere all'utente di inserire per 84 volte un numero da 1 a 100
var inserisciNumero; // creiamo una variabile per inserire un numero
var trovato = false; // creiamo una variabile che ci dice se n è stato trovato o no

// creiamo un ciclo che chiede un numero per 84 volte fino a quando non ottieniamo un numero vietato
//quando l'otteniamo verrà visualizzato il numero di tentativi effettuati e la variabile trovato che indice se il numero è dentro l array
var i = 0;
while (i < 84 && trovato == false) {
  inserisciNumero = parseInt(prompt("inserisci un numero"));
  t = 0;
  while (t < numeriRandom.length && trovato == false ) {
    if (inserisciNumero == numeriRandom[t]) {
      trovato = true;
    }
    t++
  }
  i++;
}
// stampiamo I - 1 perche partiamo da 0
console.log(i - 1);
console.log(trovato);

// funzione che genera 16 numeri random
function random(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  for (var i = 0; i < 16; i++) { // generiamo 16 numeri tramite un ciclo [i]
  var random = numeriRandom.push(Math.floor(Math.random() * (max - min + 1))) + min }
  return random;
}
