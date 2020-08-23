##### Desafio: desenvolvendo um site por dia por 90 dias 

# [Site #12 - Visão](https://www.dorlyneto.com/90sites/12-visao)

## O que te faz enxergar de verdade?

Uso óculos desde meus 6 anos de idade. Apelidos como ```quatro-olhos``` e ```fundo de garrafa``` eram tão comuns que me entristeciam bastante. Pra somar, eu era a figura típica do nerd: estudava bastante, adorava fazer perguntas para a professora e tinha ótimas notas.

Minha falta de visão se compensou, com o tempo, com uma ótima noção de perspectiva e bons reflexos para esportes. Meu esporte favorito é tênis-de-mesa, que exige bastante destreza e reflexo apurado. 

Ficando mais velho, o bullying por ser um nerdão de óculos grandes já não aconteciam mais, e se acontecesse eu não me incomodaria. Mesmo dependendo de óculos até hoje, tento enxergar o lado bom: meu cérebro compensou essa limitação me dando mais poderes em outros sentidos, praticamente ampliando minha noção que significa a visão. 

Meu site de hoje é sobre isso. O sentido que mais utilizamos, sem sombra de dúvidas. Porém, quando limitado (ou inexistente), conseguimos continuar enxergando de outras formas.

* [Acesse o site #12 - Visão](https://www.dorlyneto.com/90sites/12-visão)

## O que aprendi na construção deste site?

### Mais uma vez o poder do CSS3 me impressionando

Desta vez, um site sem nenhum Javascript. Pesquisei alguma forma de criar animações apenas com CSS, e cheguei até a propriedade [```animation```](https://tableless.com.br/css3-animation-keyframe/). Junto com ela, conheci as [```regras At```](https://developer.mozilla.org/pt-BR/docs/Web/CSS/At-rule), que instruem ao CSS como ele deveria se comportar, o que é elementar para deixar a animação do jeito que eu queria.

Para este site, foi usado a regra [```@keyframes```](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp), onde eu consigo definir as fases da minha animação, em porcentagens, e como elas devem se comportar. Usei este código para isso:

```
p {
    font-size: 0.6rem;
    font-weight: 1000;
    text-transform: uppercase;
    animation: jump 3s ease-in-out infinite;
  }
  
  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    
    50% {
      transform: translateY(1rem);
      filter: blur(15px);
    }
  }
  ```

Logo depois de ver o ```blur``` acontecendo, fiquei maravilhado com as possibilidades de criar animações simples com o CSS sem usar nenhuma linha de código em Javascript. Fui buscar mais conhecimento sobre, e encontrei este belo tutorial criado pelo grande [Mayk Brito](https://github.com/maykbrito), professor da [Rocketseat](https://rocketseat.com.br/): https://www.youtube.com/watch?v=GykTLqODQuU

---

Novamente, obrigado a todos que estão me mandando mensagens recomendando tutoriais, ideias de sites ou só para trocar ideia. Tem sido muito legal conhecer a todos! Espero continuar recebendo contatos. Saber que minha ideia tem inspirado pessoas a também se desenvolverem me motiva bastante a continuar nessa loucura que me meti.

Até o próximo site e rumo ao próximo nível! 🚀🚀🚀