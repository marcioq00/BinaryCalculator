let a = 7;
let b = 7;
let wieksza = a.toString(2);
let mniejsza = b.toString(2);
let tab = [];
let tab1 = [];
for (let i = 0; i < mniejsza.length; i++) {
  tab[i] = parseInt(mniejsza[i]);
}

for (let i = 0; i < wieksza.length; i++) {
  tab1[i + 1] = parseInt(wieksza[i]);
}
console.log(tab);
//console.log(tab1);

let ok = tab1.length + 1;
let result = [];
let wynik;
let roznica = tab1.length - tab.length;
for (let i = 0; i < roznica; i++) {
  tab.unshift(0);
}
console.log(tab);
tab1[0] = 0;
for (let i = tab1.length - 1, j = tab.length - 1; i > 0, j > 0; i--, j--) {
  if (tab[j] == undefined) {
    tab[j] = 0;
  } else {
    //tab1[i] = 0;
  }

  wynik = tab[j] + tab1[i] + tab1[0];
  console.log("Aktualny indeks tab: " + tab[j]);
  console.log("Aktualny indeks tab1: " + tab1[i]);
  console.log("Wynik: " + wynik);
  if (wynik > 1 && wynik < 3) {
    result[i] = 0;
    tab1[0] = 1;
  } else if (wynik == 1) {
    result[i] = 1;
    tab1[0] = 0;
  } else if (wynik == 0) {
    result[i] = 0;
  } else if (wynik > 2) {
    result[i] = 1;
    tab1[0] = 1;
  } else {
    console.log("inny blad");
  }
  console.log(result);
}
if (tab1[0] == 1) {
  result[0] = 1;
} else {
  result.splice(0, 1);
}

console.log(result);
