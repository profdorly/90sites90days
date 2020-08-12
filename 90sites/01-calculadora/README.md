##### Desafio: desenvolvendo um site por dia por 90 dias 

# Site #01 - Calculadora

Acesse: https://www.dorlyneto.com/90sites/01-calculadora/

## Resumo importante sobre este desafio

No dia 10 de agosto, decidi me desafiar a fazer um site por dia durante 90 dias. 

Sim, eu poderia lançar apenas um site e a cada dia colocar uma feature nova. Mas meu objetivo atual é alcançar a consistência, e não a excelência.

Ao me desafiar desenvolver um site por dia, o relógio está sempre me pressionado a estudar. Começo a escrever estas linhas às 22:41, depois de um ótimo porém cansativo dia, com a cabeça focada em terminar este documento antes das 23:59. O tempo é o melhor professor.

Vamos ao que importa, o primeiro site!

## Por que escolhi desenvolver uma calculadora?

Como hoje eu sei apenas o básico do básico em programação, dediquei alguns minutos a caçar, em textos e vídeos, tutoriais interessantes que me ensinassem a desenvolver algo simples e completo, utilizando HTML, CSS e Javascript. Encontrei este aqui no Youtube:

[![Ótimo tutorial sobre como montar uma calculadora](https://img.youtube.com/vi/BuZtAqk5LIY/0.jpg)](https://www.youtube.com/watch?v=BuZtAqk5LIY)

De cara achei uma ótima forma de começar minha empreitada. Como falei, sei apenas o básico do básico de HTML e CSS, e consigo identificar funções e variáveis em um código Javascript (mesmo que ainda não super entenda o que a maioria delas fazem, rs). Ao seguir este tutorial eu aprendi bastante coisa.

## O que aprendi?

### ```<span>``` e ```<div>```são *quase* a mesma coisa.

Se você começou a aprender HTML agora, nas primeiras aulas vai se deparar com as tags [```<span>```](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/span) e [```<div>```](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/div), que apenas *parecem* fazer a mesma coisa. As duas são como containeres, onde você pode colocar um monte de coisa dentro delas e, depois, pode estilizar essas coisas a partir de atributos. 

Ao começar a fazer esta calculadora, entendi que as ```<span>``` funcionam para elementos em linha e as ```<div>``` para criar blocos entre os elementos. Nesta aplicação, cada elemento da calculadora está numa ```<span>```, com uma propriedade Javascript chamada [```onclick```](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick), que joga o elemento clicado para o display da calculadora (um [```<input>```](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input)).

O cálculo, de fato, é realizado pela função Javascript [```eval()```](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval), que eu não conhecia e achei de uma simplicidade maravilhosa.

### Estilizar o HTML é mais complicado do que acreditamos ser

Passei um sufoco para conseguir estilizar os elementos da calculadora. Por algum motivo ainda desconhecido para mim, o meu resultado final ficou diferente, mesmo acompanhando cada linha de código do tutorial. 

No vídeo, após criar o arquivo ```style.css```, na hora de fazer a estilização do ```.calculator span```, eu deveria especificar a [```height```](https://developer.mozilla.org/pt-BR/docs/Web/CSS/height) com o valor de 100px. Deu ruim, não ficou nada bonito, e eu não entendi porquê. Como solução, especifiquei o valor de 100%, o que resolveu meu problema, gerando o resultado final que vocês podem conferir. No futuro vou estudar para entender o que aconteceu, mas fiquei feliz por ter achado uma solução.

### Ainda tenho medo do Terminal, assumo

Sempre tive atritos com o Terminal, desde adolescente. Talvez por ser um cara mais visual, a noção de resolver as coisas apenas em linhas me deixa meio cabisbaixo. Mas sei que é apenas a falta de prática. Esse desafio dos 90 site sem 90 dias veio justamente para me ajudar a vencer este problema.

Neste desafio, eu desejo me reconciliar com o Terminal. De fato, ainda não tomei um ação prática em relação a isso, mas o meu plano é usar o Terminal para criar cada commit e subi-los para o Github. Já é um começo.

São 23:33 e o primeiro dia de desafio está concluído dentro do prazo! Ótimos aprendizados, rumo ao próximo nível. 🚀
