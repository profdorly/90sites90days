let isOffline = false;
window.addEventListener('load', checkConnectivity);

document.getElementById("gif").style.display = "none"; 

function checkConnectivity() {
  updateStatus();
  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);
}

function updateStatus() {
  if (typeof navigator.onLine !== 'undefined'){
    isOffline = !navigator.onLine;
    console.log(isOffline);
    const offline_text = document.querySelector(".text");
    if (isOffline) {
        offline_text.innerHTML = "<div><p><h1>Chegou a hora de prestar atenção na sua respiração!</h1></p>Aproveita que você desplugou da internet por um minuto, repita esse exercício cinco vezes:</p><p><center><img src=\"assets/respire.gif\"></img></center></p><p>Conseguiu? Ótimo! Parar um pouco e prestar atenção na própria respiração é uma ótima forma de se reconectar com o presente.</p><p>Agora, aproveite que a internet ainda está desligada e se levante para alongar o corpo. Depois volte a fazer o que estava fazendo, pois eu sei que está arrasando :D</p></div>";
    } else {
        offline_text.innerHTML = "<h1>O conteúdo só vai aparecer se você ficar offline.</h1><br><br><h2>Desligue o Wi-Fi ou coloque no modo avião.<br></h2>";
    } 
   
  }
}

