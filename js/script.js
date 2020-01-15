// generare 16 numeri casuali da 1 a 100
var numeriRandom = [];
for (var i = 0; i < 16; i++) {
  numeriRandom.push(Math.floor(Math.random() * 100) + 1);
}
console.log(numeriRandom);


// chiedere all'utente di inserire per 84 volte un numero da 1 a 100
var inserisciNumero = 0;
var trovato = false;
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
console.log(i - 1);
console.log(trovato);
