

const startGameElement = document.getElementById('start-game');
console.log(startGameElement);


document.getElementById('start-game').addEventListener('click', function () {
    console.log('Game is starting...');

    // creo una variabile per memorizzare la scelta dell'utente
    let userNumber
    // creo una variabile per visualizzare il numero scelto dall'utente
    const userNumberElement = document.querySelector('#player-row');

    let pariDispari = prompt('Scegli pari o dispari');
    // scegli se pari o dispari
    function isEvenOrOdd() {



        if (pariDispari === 'pari') {
            console.log('hai scelto pari');

            return 'pari';

        } else if (pariDispari === 'dispari') {
            console.log('hai scelto dispari');

            return 'dispari';
        }
    }


    while (true) {

        userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
        console.log('User number:', userNumber);

        if (isNaN(userNumber)) {
            alert('Il numero inserito non è valido');

        } else if (userNumber < 1 || userNumber > 5) {
            alert('Il numero deve essere compreso tra 1 e 5');

        } else {
            (userNumber >= 1 || userNumber <= 5)
            console.log('Numero valido!')
            break;
        }
    }

    userNumberElement.innerHTML = `questo è il tuo numero -> ${userNumber}`;
    console.log(userNumberElement);

    // creo una variabile per memorizzare la scelta del computer

    let computerNumber
    computerNumber = Math.floor(Math.random() * 5) + 1;
    console.log('Computer number:' + computerNumber);

    document.querySelector('#computer-row').innerHTML = `questo è il numero del computer -> ${computerNumber}`;

    function result() {

        if ((userNumber + computerNumber) % 2 === 0) {
            return 'pari';
        }

        else {
            return 'dispari';
        }
    }

    const resultElement = document.querySelector('#result-row');
    resultElement.innerHTML = `Il risultato è: ${result()}`;
    console.log(resultElement);

    if (result() === isEvenOrOdd()) {
        console.log('Hai vinto!');
    } else {
        console.log('Hai perso!');
    }

    const vintoPersoElement = document.querySelector('#vinto-perso-row');

    if (result() === isEvenOrOdd()) {
        vintoPersoElement.innerHTML = 'Hai vinto!';
    } else {
        vintoPersoElement.innerHTML = 'Hai perso!';
    }
});