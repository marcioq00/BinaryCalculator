let a = 5;
let b = 3;
let wieksza = a.toString(2);
let mniejsza = b.toString(2);
let tab = [];
let tab1 = [];
for (let i = 0; i < wieksza.length; i++) {
  tab1[i] = parseInt(wieksza[i]);
}
for (let i = 0; i < mniejsza.length; i++) {
  tab[i] = parseInt(mniejsza[i]);
}
let wynik;
for (let i = tab.length - 1; i >= 0; i--) {
  for (let j = tab1.length - 1; j >= 0; j--) {
    wynik = tab1[j] * tab[i];
    if (wynik == 1) {
      //result[i] = wynik;
    } else if (wynik == 0) {
      //result[i] = wynik;
    } else {
      console.log("blad");
    }
  }
}
