// ZMĚNA V HTML
// querySelector je univerzální - lze vybírat podle tagu, třídy, id
/*
var headline = document.querySelector("h1");
console.log(headline);

var odpoved = document.querySelector("#odpoved").textContent;
console.log(odpoved);

var headline = document.querySelector("h1").textContent;
console.log(headline);

var paragraph = document.querySelector("p").textContent;
console.log(paragraph);

var headline1 = document.querySelector(".heading1").textContent;
var paragraph1 = document.querySelector(".paragraph1").textContent;
console.log(headline1);
console.log(paragraph1);
*/

// pomocí JS jsme změnili obsah elementu v HTML
/*
document.querySelector("h1").textContent = "Já jsem nová h1.";
document.querySelector("p").textContent = "Já jsem nový p.";
*/

// querySelector vybírá vždy jen první element
// querySelectorAll
var allParagraph = document.querySelectorAll("p");
console.log(allParagraph);           // chová se jako pole, počítá se od 0

/*
console.log(allParagraph[3].textContent);     
console.log(allParagraph[4].textContent); 
console.log(allParagraph[5].textContent); 
*/

for (var i = 3; i < allParagraph.length; i++) {
    console.log(allParagraph[i].textContent);
}

// VÝBĚR A ZMĚNA CSS POMOCÍ QUERY SELEKTORU

document.querySelector("h1").style.color = "green";

/*
// chci, aby <h1> zmizela
document.querySelector("h1").style.display = "none";
*/

// chci změnit font-size a font-weight
document.querySelector("h1").style.fontSize = "60px";
document.querySelector("h1").style.fontWeight = 400;

// GetElementsByClassName a getElementById
// GetElementsByClassName - HTML Collection, pracuje se jako s polem
// můžu mít stejnou třídu u více elementů, takže mohu procházet cyklem
/*
var mojeTridy = document.getElementsByClassName("prvni")                       // již není třeba psát .
console.log(mojeTridy);
console.log(mojeTridy[0].textContent);
console.log(mojeTridy[1].textContent);
console.log(mojeTridy[2].textContent);

for (var i = 0; i < mojeTridy.length; i++) {
    console.log(mojeTridy[i].textContent);
}
*/

// GetElementById
// Id mám na stránce pouze 1x, nemusím tedy řešit žádné pole
var mojeId = document.getElementById("druhy");                                  // již není třeba psát #
console.log(mojeId.textContent);

// getElementsByTagName
var nadpis2 = document.getElementsByTagName("h2");
console.log(nadpis2[0].textContent);
console.log(nadpis2[1].textContent);

// textContent a innerHTML
// textContent - vypisuje pouze obyčejný text
var firstParagraph = document.querySelector("p").textContent;
console.log(firstParagraph);

// innerHTML - vypisuje text, včetně vnitřního HTML, pokud tam nějaké je
var html = document.querySelector("p").innerHTML;
console.log(html);

// ZJIŠŤUJEME ATRIBUTY JAKO SRC, ALT, HREF
// Zda element <a> má atribut href. Výsledkem bude true nebo false.
var text1 = document.querySelector("a").hasAttribute("href");
console.log(text1);

// Chceme vypsat hodnotu atributu src a alt.
console.log(document.querySelector("img").src);
console.log(document.querySelector("img").alt);

// Vybíráme prvního a posledního potomka z <ul>
/*
var first = document.getElementById("list").firstElementChild.textContent;
var last = document.getElementById("list").lastElementChild.textContent;
console.log(first, last);
*/

// Chci vybrat i další potomky, getElementsByTagName returns HTMLCollection (viz poznámky)
/*
var seznam = document.getElementsByTagName("li");
console.log(seznam);
console.log(seznam.length);
console.log(seznam[1].textContent);
console.log(seznam[2].textContent);
console.log(seznam[3].textContent);
console.log(seznam[4].textContent);
*/

// JAK VYTVOŘIT ÚPLNĚ NOVÝ ELEMENT
var newSpan = document.createElement("span");
var myH1 = document.querySelector("h1");
/*
myH1.appendChild(newSpan, myH1);             // do <h1> jsem přidala <span> jako potomka
console.log(myH1);                           // vypíše <h1> včetně potomka <span> 
*/

document.body.insertBefore(newSpan, myH1);   // přidala jsem <span> před <h1>

// CO VŠECHNO UMÍME A ÚVOD DO EVENTŮ
/*
1. Přijmeme informace od návštěvníka stránky, např. pomocí prompt()
2. Zpracujeme je (podmínky, cykly, funkce, proměnné atd.)
3. Vypíšeme je zpět do stránky (umístíme je do HTML nebo změníme CSS)
*/
// Opakování
/*
var name = prompt("Jak se jmenuješ?");
if (name === "David") {
    document.querySelector("h1").textContent = "Ahoj, " + name;
} else {
    document.querySelector("h1").textContent = "Tebe neznám";
}
*/

// Prompt se příliš často nepoužívá - používají se eventy (př. uživatel klikne na nadpis, najede na něco myší)

// EVENTY - zpráva, která se posílá kódu, že se na webu něco stalo (např. na něco bylo kliknuto, scrollovalo se,
// změnila se velikost okna, stiskla se určitá klávesa)
// EVENT LISTENER - funkce, která čeká na určitý event, a pak něco provede
function welcome() {
    console.log("Vítejte u nás!");
}
// welcome();           // aby se funkce spustila, je nutné psát ()

// kliknu na <h1>, spustí se funkce welcome
// document.querySelector("h1").addEventListener("click", welcome); 
// tady není nutné psát (), event listener je již funkce, která dokáže spustit funkci welcome
// jedna funkce tedy automaticky spouští druhou funkci =  CALLBACK FUNCTION

// ANONYMNÍ FUNKCE - nepotřebuje název
/*
document.querySelector("h1").addEventListener("click", function() {
    console.log("Vítejte u nás!");
})
*/

// DALŠÍ EVENTY
/*
click = kliknutí
dblclick = dvojité kliknutí
wheel = kolečko myši
mousedown = kliknete na tlačítko myši směrem dolů
mouseenter = najedeme myší
mouseleave = odejití myši
mousemove = jakýkoliv pohyb myši
mouseover = myší nad elementem
*/
/*
function myEvent () {
    console.log("Event byl spuštěn.");
}

document.querySelector("h2").addEventListener("mouseenter", myEvent);
*/

// TLAČÍTKEM PŘIDÁVÁME NOVOU POLOŽKU DO SEZNAMU
// v HTML u href musím mít #
var button = document.getElementsByClassName("btn");

button[0].addEventListener("click", clickMe);

function clickMe(){
    
    var myList = document.getElementById("listDve");
    
    var newItem = document.createElement("li");
    
    newItem.textContent = "Jsem tu nový";
    
    myList.appendChild(newItem);
    
}

// VYPISUJEME KLIKNUTÍ NA KLÁVESU
// chceme vědět, na kterou klávesu bylo kliknuto - do funkce doplníme (event)
document.body.addEventListener("keydown", myKey);
function myKey (event) {
    console.log(event);
    console.log(event.key);
}

// Vypisujeme vlastnosti CSS v JavaScriptu pomocí getComputedStyle
var cube = document.getElementById("cube");
var style = getComputedStyle(cube);
console.log(parseInt(style.left));
// je uváděno 20px, potřebujeme se zbavit px
// Number () method - convert booleans and dates to a number
// ParseInt () method parses a value as a string and returns the first integer
console.log(style.top);
console.log(style.backgroundColor);   // bez pomlčky