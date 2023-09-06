let a = 10000;
let b = 5;
let tab = [];
let text = "";
tab.push(a);
tab.push(b);
console.log(String(tab[0]));
for (let i = 0; i < tab.length; i++) {
  text = tab[i];
  console.log(String(tab[i]).length);
  console.log(tab[i + 1]);
  for (let j = 0; j < parseInt(text).length; j++) {
    if (text[i] == "1" || text[i] == "0") {
      console.log("Binary");
    } else {
      console.log("Nie binary");
    }
  }
}
console.log(text.length);
let wynik = a * b;
console.log(wynik.toString(2));
