//Result eintragen:
let UserScore = document.querySelector('#you');
let CompScore = document.querySelector('#computer');


// //Einfärben:
let winUser = document.querySelector('#user');
let winComp = document.querySelector('#comp');



let userChoice = document.getElementById('userchoice'); // Eintrag: Auswahl vom User
let resultComp = document.getElementById('pcresult'); // Eintrag Auswahl vom Computer
let eintrag = document.getElementById('ergebnis');// Ergebnis

let choicesradio = document.querySelectorAll('input[type=radio]'); // Auswahl der Runden
let choicesbtn = document.querySelectorAll('.btnchoices'); // Auswahl der Button



let roundsHavePlay = document.getElementById('yourRound'); // User Spielrunden
let roundsToPlay = document.getElementById('verfügbareRunden'); // Spielrunden zur Verfügung
 
  


  //Variablen für das Spiel
  let computerChoice;
  let yourScore = 0;
  let pcScore = 0;
  let roundsPlay = 0;
  let roundAll;
  let btnAll;
  let result;



// ForEach-Schleife über die Radio-Buttons mit Abspeicherung der Values
choicesradio.forEach(element => {
  element.addEventListener('click', (event)  => {
 roundAll = event.target.value;
    console.log(roundAll);
  });
});


//  ForEach-Schleife über die Buttons mit verschiedenen Funktionen und hierbei wird der Wert des Buttons ausgelesen und in einer Variable gespeichert ebenso werden werden hier die Runden hochgezählt.
choicesbtn.forEach(choicesbtn  => choicesbtn.addEventListener('click', (e) => {
    btnAll = e.target.id
    userChoice.innerHTML = btnAll;
    computerAuswahl();
    roundsPlay ++;
    play();
  }));

  // Function Computerauswahl 
  let computerAuswahl = () => {
    let computerRounds = Math.floor(Math.random() * 3);
    if( computerRounds === 1) {
      computerChoice ='rock'
    }
    if( computerRounds === 2) {
      computerChoice = 'paper'
    }
    if( computerRounds === 3) {
      computerChoice = 'scissors'
    }
   resultComp.innerText = computerChoice;
  }

  // Function mit Vergleich der Spielrunden und Auswahl Computer wie auch des Spielers
  let play = () => {
    if(roundsPlay < roundAll) {
      choicesradio.forEach(choicesradio => choicesradio.disabled = true);
      if (computerChoice == btnAll) {
        result = 'Es ist unentschieden';
        winComp.style.borderColor = "aqua";
        winComp.style.borderColor = "aqua";
      }
      else if (computerChoice == 'rock' && btnAll == 'paper') {
        result = 'Gewonnen'
        yourScore++;
        winUser.style.borderColor = "green";
        winComp.style.borderColor = "aqua";
      }
      else if (computerChoice == 'rock' && btnAll == 'scissors') {
        result = 'Verloren'
        pcScore++;
      winComp.style.borderColor = "green";
      winUser.style.borderColor = "aqua";
      }
      else if (computerChoice == 'paper' && btnAll == 'scissors') {
        result = 'Gewonnen'
        yourScore++;
        winUser.style.borderColor = "green";
        winComp.style.borderColor = "aqua";
      }
      else if (computerChoice == 'paper' && btnAll == 'rock') {
        result = 'Verloren'
        pcScore++;
      winComp.style.borderColor = "green";
      winUser.style.borderColor = "aqua";
      }
      else if (computerChoice == 'scissors' && btnAll == 'rock') {
        result = 'Gewonnen'
        yourScore++;
        winUser.style.borderColor = "green";
        winComp.style.borderColor = "aqua";
      }
      else if (computerChoice == 'scissors' && btnAll == 'paper') {
        result = 'Verloren'
        pcScore++;
      winComp.style.borderColor = "green";
      winUser.style.borderColor = "aqua";
      }
      eintrag.innerHTML = result;
    } else {
      choicesbtn.forEach(choicesbtn  => choicesbtn.disabled = true);
    }
    CompScore.innerText = pcScore;
    UserScore.innerText = yourScore;

    roundsHavePlay.innerText = roundsPlay;
    roundsToPlay.innerText = roundAll;
  }
  

  //Function um die Seite neu zu laden 
  let reload = () => {
    location.reload();
  };

// Reset-Button um die Seite neuzuladen
document.getElementById('reset').addEventListener("click", reload);
