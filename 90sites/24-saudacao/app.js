var name = prompt('Qual o seu nome?', 'Conte para mim!');
var today = new Date();
var hrs = today.getHours();
    document.writeln('<b>');
    document.writeln('<b>');
    if (hrs <= 12){
        
        document.write('Bom dia, '+name+'!');
    } else if (hrs <= 18){
        document.write('Boa tarde, '+name+'!');
    } else {
        document.write('Boa noite, '+name+'!');
    }
    document.write('<br/>')