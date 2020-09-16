##### Desafio: desenvolvendo um site por dia por 90 dias 

# [Site #36 - Carnaval](https://www.dorlyneto.com/90sites/36-carnaval)

Eu demorei para entender o valor do Carnaval para a sociedade. Quando adolescente, não entendia qual o motivo de toda aquela algazarra nas ruas. Comecei a de fato pular carnaval apenas com 23 anos, já morando com amigos e construindo minha independência.

Agora, com 29, já não tenho mais o mesmo pique de antes para aguentar 5 dias de festa. Porém, admiro o vigor de quem consegue, e adoro utilizar glitter, nem que seja para ficar em casa assistindo ao desfile das escolas de samba.

Com o mundo virando de cabeça para baixo, não sei se teremos Carnaval ano que vem. Espero que não, se as coisas ainda estiverem feias. Mas desejo que tudo se normalize para que a gente possa, mais uma vez, fazer essa algazarra juntos.

* [Acesse o site 36 - Carnaval](https://www.dorlyneto.com/90sites/36-carnaval)

## O que aprendi na construção deste site?
 
Encontrei o código original ao navegar pelo Codepen. Encontrei o perfil do dev Martin Blackburn e seu projeto Confetti: https://codepen.io/walking_fishy/pen/YZpWMy

De cara, ao ver o efeito criado por ele, lembrei do glitter de Carnaval. Estudei seu código para aprender coisas novas. De cara, já modifiquei o tamanho da div que representa o glitter e escolhi novas cores. 

Percebi algo estranho. Como havia apenas uma ```<div>``` com uma classe e, ao mesmo tempo, diversas cores diferentes no projeto? Foi nessa hora que pesquisei e tomei conhecimento da metodologia [BEM (Block - Element - Modifier)](https://css-tricks.com/bem-101/).

Trata-se de uma convenção para manter o código simples e organizado, principalmente em momentos que sua criação começa a ficar muito grande. Neste caso, a classe ```.glitter``` é o bloco, que contém o elemento ```.glitter__item``` e os modificadores ```.glitter__item--animation``` e ```.glitter__item--colour```. Ou seja, com apenas uma classe, eu consegui criar diversas variações, economizando várias linhas de código.

Compartilho aqui um ótimo texto sobre BEM, em português, escrito pelo dev [Tárcio Zemel](https://github.com/tarciozemel): https://desenvolvimentoparaweb.com/css/bem/

---

Até a próxima e rumo ao próximo nível! 🚀🚀🚀