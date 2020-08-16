//Grab day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let imgSrc;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'DOMINGO!';
        imgSrc = '<img src="assets/domingo-bomdia.gif"></img>';
        break;
    case 1:
        nameOfDay = 'SEGUNDA!';
        imgSrc = '<img src="assets/segunda-bomdia.gif"></img>';
        break;
    case 2:
        nameOfDay = 'TERÇA!';
        imgSrc = '<img src="assets/terca-bomdia.gif"></img>';
        break;
    case 3:
        nameOfDay = 'QUARTA!';
        imgSrc = '<img src="assets/quarta-bomdia.gif"></img>';
        break;
    case 4:
        nameOfDay = 'QUINTA!';
        imgSrc = '<img src="assets/quinta-bomdia.gif"></img>';
        break;
    case 5:
        nameOfDay = 'SEXTA!';
        imgSrc = '<img src="assets/sexta-bomdia.gif"></img>';
        break;
    case 6:
        nameOfDay = 'SÁBADO!';
        imgSrc = '<img src="assets/sabado-bomdia.gif"></img>';
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
let gifDiv = document.getElementById('gif');
gifDiv.innerHTML = `${imgSrc}`


