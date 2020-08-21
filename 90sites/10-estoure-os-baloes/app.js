let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                e.target.classList.add('ballon-pop');
                popped++;
                removeEvent(e);
                makeBallonSound();
                checkAllPopped();
    }   
});

const modalButton = document.querySelector('.modal-button');

modalButton.addEventListener('click', function() {
  closeModal();
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function makeBallonSound() {
  const audio = new Audio('pop.mp3');
  audio.play();
}

function closeModal() {
  const modal = document.querySelector('.modal-wrapper');
  modal.style.display = 'none';
}

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};