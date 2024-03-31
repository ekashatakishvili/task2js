var you;
var yourScore = 0;
var splayer;
var playerScore = 0;

var choices = ["1", "2", "3"];

window.onload = function() {

      for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".jpg";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
      }

}

function selectChoice() {
you = this.id;
document.getElementById("your-choice").src = you + ".jpg";

player = choices[Math.floor(Math.random() *3 )];
document.getElementById("opponent-choice").src = player + ".jpg";


if (you === player) {
    yourScore += 1;
    playerScore += 1;

}
else {
    if (you === "2") {
        if (player === "3") {
            yourScore += 1;
        }
        else if (player === "1") {
            playerScore += 1;
        }
     else if (you === "3") {
            if (player === "1") {
                yourScore += 1;
            }
            else if (player === "2") {
                playerScore += 1;
            }
     else if (you === "1") {
                if (player === "2") {
                    yourScore += 1;
                }
                else if (player === "3") {
                    playerScore += 1;
                }

        }

    }
}

document.getElementById("your-score").innerText = yourScore;
document.getElementById("opponent-score").innerText = playerScore;

}



if (yourScore > 15) {
    alert("You are winner!");
}
else if (playerScore > 15) {
    alert("Game over!");
}

}

