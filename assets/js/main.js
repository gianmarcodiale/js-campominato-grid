/* 
CONSEGNA
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
- con difficoltà 1 => tra 1 e 100
- con difficoltà 2 => tra 1 e 81
- con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//creo la funzione per creare le celle.
function generateGrid(selector, limit, tagName, className) {
    const cellsElement = document.querySelector(selector);

    for (index = 0; index < limit; index++ ) {
        const cellItem = document.createElement(tagName);
        cellItem.classList.add(className);
        cellsElement.append(cellItem);
    };
};

//creo la funzione per generare i numeri
function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//creo la funzione per generare i numeri che andranno a riempire le celle.
function generateCellNumbers(limit) {
    const numbers = [];

    while (numbers.length !== limit) {
        const number = getRandInteger(1, limit);

        if (!numbers.includes(number)) {
            numbers.push(number);
        };
    };
    return numbers.sort(function(a, b) {
        return a - b;
    });
};
//generateGrid(".cells", 100, "div", "cell_100");
//generateGrid(".cells", 81, "div", "cell_81");
//generateGrid(".cells", 49, "div", "cell_49");