
const maDiv = document.getElementById("maDiv");
const maDiv2 = document.getElementById("maDiv2");
const maDiv3 = document.getElementById("maDiv3");

const refreshButton = document.getElementById('refreshButton');

/* Ajouter    "-", "+", "/"    selon les besoins */
const signesDOperation = ["*"];

const reponseUtilisateur = document.getElementById("reponseUtilisateur");
const validerButton = document.getElementById("validerButton");
let resultat;
let score = 0; // initialiser le score a 0
let nombreQuestions = 0;

const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function() {
  score = 0;
  nombreQuestions = -1;
  document.getElementById("score").textContent = "Score : " + score;
  document.getElementById("nombreQuestions").textContent = "Nombre de questions : " + nombreQuestions;
  mettreAJourContenuDivs();
 
});

function genererNombreAleatoire() {
  return Math.floor(Math.random() * 5) + 1;
}

function genererSigneAleatoire() {
  return signesDOperation[Math.floor(Math.random() * signesDOperation.length)];
}

function mettreAJourContenuDivs() {
  
  if (nombreQuestions == 20) {
    
    
    // Afficher le score final
    alert("Le jeu est terminé ! Votre score est de " + score + " sur 20.");
    return;
  }
  
  
  
  const nombreAleatoire = genererNombreAleatoire();
  const nombreAleatoire2 = genererNombreAleatoire();
  const signeAleatoire = genererSigneAleatoire();
  
  maDiv.textContent = nombreAleatoire;
  maDiv2.textContent = signeAleatoire;
  maDiv3.textContent = nombreAleatoire2;
  
  
  switch(signeAleatoire) {
    case "*":
      resultat = nombreAleatoire * nombreAleatoire2;
      break;
      case "/":
        resultat = nombreAleatoire / nombreAleatoire2;
        break;
        case "+":
          resultat = nombreAleatoire + nombreAleatoire2;
          break;
          case "-":
            resultat = nombreAleatoire - nombreAleatoire2;
            break;
          }
          nombreQuestions++;
          document.getElementById("nombreQuestions").textContent = "Nombre de questions : " + nombreQuestions;
        }
        
        function afficherScore() {
          const scoreDiv = document.getElementById("score");
          scoreDiv.textContent = "Score : " + score;
        }
        
        
        refreshButton.addEventListener('click', mettreAJourContenuDivs);
        
        validerButton.addEventListener("click", function() {
          if(parseInt(reponseUtilisateur.value) === resultat) {
            alert("Bravo, c'est la bonne réponse !");
            score++;
            document.getElementById("score").textContent = "Score : " + score; // mettre à jour l'affichage du score
          } else {
            alert("Désolé, ce n'est pas la bonne réponse.");
          }
          reponseUtilisateur.value = "";
          mettreAJourContenuDivs();
          
          
          
          
        });
        
        
        
        
        