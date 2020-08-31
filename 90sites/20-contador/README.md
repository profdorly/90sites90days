##### Desafio: desenvolvendo um site por dia por 90 dias 

# [Site #20 - Contador](https://www.dorlyneto.com/90sites/20-contador)

Aos domingos, tenho tentado fazer projetos menos desafiadores, e revisitar o que aprendi na semana. Hoje não foi diferente. O site é bastante simples, e foi baseado em um tutorial criado pelo projeto Learn Webdev: https://learn-webdev.com/52-projects-in-52-weeks/week-4-javascript-beginner-projects-tutorial-simple-counter/

* [Acesse o site #20 - Contador](https://www.dorlyneto.com/90sites/20-contador)

## O que aprendi na construção deste site?

Caso você seja uma pessoa mais visual, ele também fez o tutorial para este site em vídeo:

[![Ótimo tutorial sobre como montar um contador](https://img.youtube.com/vi/BWKWHE5rI4.jpg)](https://www.youtube.com/watch?v=-BWKWHE5rI4)

O Javascript para fazer este site é tão simples, mas tão simples que eu faço até questão de compartilhar aqui.

```
let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click', function(){
    integer += 1;
    int.innerHTML = integer;
})

remove.addEventListener('click', function(){
    integer -= 1;
    int.innerHTML = integer;
})
```

Uma grande dificuldade deste projeto foi conseguir configurar bem o CSS para os elementos ficarem alinhados da forma que eu desejava. Percebi que este grande detalhe da estilização é algo que preciso estudar mais.

Foi assim que achei um ótimo tutorial da dev Tania Rascia, sobre os fundamentos do CSS: https://www.taniarascia.com/overview-of-css-concepts/

---

Até a próxima e rumo ao próximo nível! 🚀🚀🚀



