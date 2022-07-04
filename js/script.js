//*FUNZIONI*//
function createNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function createPrompt(){
    return parseInt(prompt('Inserisci un numero da 1 a 100:'));
}

//Recupero gli elementi dal DOM
const display = document.getElementById('display');
const number = document.querySelector('.random-number')

//Scrivo in pagina i secondi
let seconds = 30;
display.innerText = seconds;

//Scrivo in pagina i numeri casuali
const randomNumber = [];

for(let i = 0; i < 5; i++){
    const random = createNumber();
    randomNumber.push(random);
 }

 console.log(randomNumber);
 number.innerText = randomNumber;


//Creo la logica per far diminuire il numero
const countdown = setInterval(function(){
display.innerText = --seconds;

//Faccio stoppare il numero quando è arrivato a 0
if(seconds === 0){
    clearInterval(countdown);

    //Scompaiono i numeri 
    number.classList.add('hidden')

    //Compaiono i 5 prompt
    let promptNumber;
    setTimeout(function(){
        for(let i = 0; i < 5; i++){
           promptNumber = createPrompt();
           console.log(promptNumber);
         }
    }, 200)

    //Compare l'alert con il punteggio
    let score = 0; 
    setTimeout(function(){
        for(let i = 0; i < 5; i++){
            if(randomNumber.includes(promptNumber)){
                ++score;
            }
          }

        alert(`Complimenti hai totalizzato: ${score} punti`);
    }, 200)
}
}, 1000)