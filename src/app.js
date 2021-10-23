//JS type safe değildir(tip güvenli deği)

console.log("Merhaba Kodlama.io")
let dolarBugun = 9.30;
let dolarDun = 9.20;

{
    let dolarDun = 9.10;
}

console.log(dolarDun);

const euroDun = 11.20;
//euroDun=12.15 Hatalı yazım
console.log(euroDun)

//array
//camelCaseing
//PasscalCasing
let konutKredileri = ["Konut Kredisi","Emlak Kredisi","Kamu Konut Kredisi","Özel Konut Kresdisi","Toki Konut Kredisi"];

console.log("<ul>")
for (let i = 0; i <konutKredileri.length; i++) {
    document.write("<li>"+konutKredileri[i]+"</li>");
    console.log("<li>"+konutKredileri[i]+"</li>");

}
console.log("</ul>")
{
    // <ul>
    //     <li>Konut Kredileri</li>
    //     <li>Emlak Konut Kredileri</li>
    //     <li>Kamu Konut Kredileri</li>
    // </ul>



}
console.log(konutKredileri)


