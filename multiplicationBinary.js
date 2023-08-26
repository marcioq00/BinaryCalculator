let a = 5;
let b = 3;
let wieksza = a.toString(2);
let mniejsza = b.toString(2);
let tab = [];
let tab1 = [];
let result = [];
let temp = "";
for (let i = 0; i < wieksza.length; i++) {
  tab1[i] = parseInt(wieksza[i]);
}
for (let i = 0; i < mniejsza.length; i++) {
  tab[i] = parseInt(mniejsza[i]);
}
let wynik;
for (let i = tab.length - 1; i >= 0; i--) {
  wynik = null;
  temp = "";
  for (let j = tab1.length - 1; j >= 0; j--) {
    wynik = tab1[j] * tab[i];
    if (wynik == 1) {
      //result[i] = wynik;
      temp += String(wynik);
    } else if (wynik == 0) {
      temp += String(wynik);
    } else {
      console.log("blad");
    }
  }
  result.unshift(temp);
}
let test1 = [];

for (let i = 0; i < 3; i++) {
  test1[i] = [];
  for (let j = 0; j < 3; j++) {
    test1[i][j] = 0;
  }
}
console.log(test1[0][1]);
