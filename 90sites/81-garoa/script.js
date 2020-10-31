function createCircle() {
    const circleEl = document.createElement('div')
	circleEl.classList.add('circle')
	circleEl.style.top = Math.random() * innerHeight + "px";
	circleEl.style.left = Math.random() * innerWidth + "px";
	document.body.appendChild(circleEl);
	
	setTimeout(() => {
        circleEl.remove()
    }, 3000)
}

setInterval(createCircle, 300)