##### Desafio: desenvolvendo um site por dia por 90 dias 

# [Site #04 - Catavento](https://www.dorlyneto.com/90sites/04-catavento)

## Até onde o vento pode te levar?

Essa coisa que chamamos de vento sempre me fascinou. É possível senti-lo, mesmo sem vê-lo. Ao mesmo tempo em que sua brisa é revigorante, a sua intensidade pode gerar caos e destruição. É a força da natureza que eu mais respeito.

Por isso eu amo cataventos. Seu movimento tangibiliza a beleza dos ventos passando por nós. Tentei demonstrar essa leveza neste site.

* [Acesse o site #04 - Catavento](https://www.dorlyneto.com/90sites/04-catavento)

## Como este site foi construído?

O conceito do site é bastante simples: passe o mouse por cima do catavento e ele começa a girar. Neste caso, você é o vento que faltava.

Para fazer isso acontecer, finalmente chegou a hora do Javascript! E junto com ele, contei com a sensacional ajuda do dev [André Zagatti](https://github.com/AZagatti), que conheci quando ele era aluno da Rocketseat. Gravem este nome que o garoto vai longe!

Para começar, me aventurei a construir, pela primeira vez, uma estrutura de grid no HTML e CSS do projeto. Aprendi o conceito a partir dessa aula do fabuloso professor [Mayk Brito](https://github.com/maykbrito):

[![Desvendando o CSS Grid na prática | Mayk Brito](http://i3.ytimg.com/vi/HN1UjzRSdBk/hqdefault.jpg)](https://www.youtube.com/watch?v=HN1UjzRSdBk)

Minha ideia era utilizar grid para separar o ```header```, o ```main content``` e o ```footer``` do proejto. Mostrei ao Zagatti que estava fazendo e ele me ofereceu uma estrutura simplificada, que ele me autorizou a compartilhar aqui: https://codesandbox.io/s/layout-vnpij

Pesquisando como criar o efeito de passar o mouse por cima do catavento para ele começar a girar, me deparei com este código criado pelo dev [Mehmet Burak Erman](https://mburakerman.com/): https://codepen.io/mburakerman/pen/JYgLwe

Ele depende da biblioteca [jQuery](https://jquery.com/) para funcionar e o efeito do ```hover``` só acontecia passando o mouse por cima do botão. Comecei a passar uns perrengues com isso, principalmente no CSS do botão. Foi neste momento que o Zagatti me ajudou a simplificar o código, desenvolvendo todo o efeito do ```hover``` direto no Javascript, ficando assim: 

```
const gifHover = document.querySelector('#gif-hover');
const hover = document.querySelector('#hover');
const picHover = document.querySelector('#pic-hover');

gifHover.style.display = 'none';

hover.onmouseover = function() {
  gifHover.style.display = 'block';
  picHover.style.display = 'none';
}

hover.onmouseout = function() {
  gifHover.style.display = 'none';
  picHover.style.display = 'block';
}
```

Se você tiver a oportunidade de avaliar o código original criado pelo Mehmet Burak Erman, verá que o outro código proposto pelo Zagatti é bem mais simples e, de quebra, oferece um efeito melhor. Essa colaboração entre devs, mesmo que muitas vezes feita de forma invisível, é uma das grandes belezas deste universo da programação. Gostaria de um dia ver um papo entre o Mehmet e o Zagatti.

É neste nível que eu quero chegar um dia! Aprender cada vez mais e, com este conhecimento, criar caminhos mais simples para solucionar problemas. 

## O que aprendi?

### A arquitetura por trás do design é uma coisa linda

Estudando sobre grid no CSS, percebi que este é um assunto vasto e fundamental para qualquer desenvolvedor. Eu sou uma pessoa que admira bastante o design para internet, e entender um pouco mais de como se faz a distribuição dos elementos em uma página me fez entender a importância da forma como arquitetamos as informações.

### Pedir ajuda é essencial. Ensinar é a melhor forma de aprender

Até um pouco antes das 19 horas, eu não tinha certeza do que desenvolveria para o site de hoje. Foi em uma conversa com o dev [Claudio Orlandi](https://github.com/csorlandi) que tive a ideia de animar um catavento. E a ajuda do Zagatti foi crucial para que eu conseguisse executar a entrega deste site dentro do prazo. Somado a isso, estou recebendo diversas mensagens no meu [LinkedIn](https://www.linkedin.com/in/dorlyneto) de pessoas que não conhecia, dando sugestões de sites para eu fazer e propondo melhorias nos códigos que já publiquei.

Outra coisa legal é que as poucas coisas que estou aprendendo, tento compartilhar também. Um exemplo foi o post recente que fiz no meu blog, listando [formas gratuitas de como publicar um site.](https://dorly.blog/como-publicar-site-de-graca/). Parece algo bobo, mas ao fazer o post descobri que muitos devs bem mais experientes que eu ainda não conheciam as soluções que apresentei por lá. Sempre temos o que ensinar, pois sempre há alguém querendo aprender. 

Ter uma rede de pessoas dispostas a te ajudar é um privilégio, e meu desejo é retribuir essa ajuda cada vez mais, criando um ciclo de ajuda na comunidade. É assim que chegaremos, juntos, ao próximo nível.

---

Agradeço aos bons ventos que te trouxeram até aqui e até o próximo site! 🚀🚀🚀