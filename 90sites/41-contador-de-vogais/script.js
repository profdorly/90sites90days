const input = document.querySelector("input");
const btn = document.querySelector("button");
const numDisp = document.querySelector(".numDisp");

function countVowel() {
  let vowels = "aeiouáéíóúãõâêîôû";
  let wordInput = input.value.toLowerCase();
  let vowelCount = 0;

  for (let i = 0; i < wordInput.length; i++) {
    if (vowels.indexOf(wordInput[i]) !== -1) {
      vowelCount += 1;
    }
  }
  numDisp.textContent = "Quantidade de vogais: " + vowelCount;
}

btn.addEventListener("click", countVowel);
