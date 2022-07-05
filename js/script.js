//*PREPARAZIONE*//
const min = 1;
const max = 100;
const totalNumbers = 5
let seconds = 30;


//*FUNZIONI*//
function createNumber(min, max, total){
    const numbers = [];

    while(numbers.length < total){
        const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
        if(!numbers.includes(randomNumber)) numbers.push(randomNumber);
    }

    return numbers;
}

function createPrompt(){
    return parseInt(prompt('Inserisci un numero da 1 a 100:'));
}

//Recupero gli elementi dal DOM
const display = document.getElementById('display');
const numberElements = document.getElementById('random-number-list');

//Scrivo in pagina i secondi
display.innerText = seconds;

//Creo i numeri casuali
const numbers = createNumber(min, max, totalNumbers);
console.log(numbers);

//Scrivo in pagina i numeri casuali
let items = '';

for(let i = 0; i < totalNumbers; i++){
   items += `<li>${numbers[i]}</li>` 
}

numberElements.innerHTML = items;


//Creo la logica per far diminuire il numero
const countdown = setInterval(function(){
display.innerText = --seconds;

//Faccio stoppare il numero quando è arrivato a 0
if(seconds === 0){
    clearInterval(countdown);

    //Scompaiono i numeri 
    numberElements.classList.add('hidden')

    //Compaiono i 5 prompt
    setTimeout(function(){
        const userNumbers = [];

        while(userNumbers.length < totalNumbers){
            const userNumber = createPrompt();
            if(!userNumbers.includes(userNumber)) userNumbers.push(userNumber);
        } 

        //Compare l'alert con il punteggio
        let correctAnswer = [];
        for(let i = 0; i < 5; i++){
            if(numbers.includes(userNumbers[i])) correctAnswer.push(userNumbers[i])
          }

        alert(`Complimenti hai totalizzato: ${correctAnswer.length} punti e hai indovinato( ${correctAnswer} )`);
    }, 200)
}
}, 1000)