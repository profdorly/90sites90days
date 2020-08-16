##### Desafio: desenvolvendo um site por dia por 90 dias 

# [Site #06 - Relógio analógico](https://www.dorlyneto.com/90sites/06-relogioanalogico)

## Que horas são?

Meu sobrinho está com quase 3 anos de idade. Quando ele estiver um pouco maior, farei questão de ensiná-lo a ver as horas em um relógio analógico. 

Você pode me perguntar: 
> Dorly! O seu sobrinho vai usar smartwatch com certeza. Não é bem mais fácil ensinar a ver as horas no formato digital?

Sim, é muito mais fácil. Só que aprender a identificar as horas em um formato analógico é uma excelente forma de se conectar com a História dos tempos passados. E eu aposto que sempre será um charme a mais deixar o ponteiro do relógio em formato analógico, mesmo que seja num Apple Watch moderníssimo:

![Ponteiro analógico em um Apple Watch](https://9to5mac.com/wp-content/uploads/sites/6/2019/09/watchOS-6-Meridian-Watch-Face-White.jpg)

Por isso meu próximo site é um relógio analógico. É a minha contribuição para sempre conectarmos o passado com o futuro.

* [Acesse o site #06 - Relógio analógico](https://www.dorlyneto.com/90sites/05-bomdiagrupo)

## O que aprendi na construção deste site?

Como de costume, após ter a ideia de fazer um relógio analógico, fui ao requisitado Google encontrar tutoriais que me auxiliassem nesta missão. Encontrei várias formas diferentes de fazer a aplicação, mas uma em especial me chamou mais a atenção. 

### A tag ```<canvas>``` é muito legal!

Usei como base o tutorial criado pela [Bluelime Learning Solutions](https://bluelimelearningsolutions.com/), em seu curso [JavaScript for beginners: Create 27 projects from scratch](https://www.udemy.com/course/javascript-for-beginners-create-27-projects-from-scratch/). De cara fiquei impressionado com a tag [```<canvas>```](https://www.w3schools.com/html/html5_canvas.asp), por me permitir desenhar o que eu quiser, de acordo com a programação feita pelo Javascript. 

Eu não tinha noção do poder de estilização que eu poderia encontrar com o Javascript. Ao iniciar o tutorial e começar o desenho do relógio, me impresisonava a cada variável ou função declarada.

### Eu (acho) que estou começando a entender a responsividade.

No meu [site #04](https://github.com/dorlyneto/90sites90days/tree/master/90sites/04-catavento), o dev [Yuri Faria](https://github.com/Windows87) fez uma [pull request](https://github.com/dorlyneto/90sites90days/pull/2) me mostrando como deixar o site responsivo. Foi baseado nisso que decidi buscar mais a fundo como fazer isso acontecer para este site #06. Para deixar responsivo o meu relógio analógico, utilizei o seguinte código no CSS:

```
#canvas {
    width:30vw;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin:auto;
}

canvas {
    display: inline;
}
```

Funcionou 100%! Ainda não sei se é a melhor forma de fazer isso, então fiquem à vontade para fazer uma PR nesse projeto, melhorando meu código.

---

Hoje completo 7 dias de foco em um dos desafios mais empolgantes que já entrei. Em apenas 7 dias codando, já aprendi mais que nos últimos 7 anos de idas e vindas entre tutoriais na internet e inscrições em cursos gratuitos de programação por aí.

Lembrando: consistência antes da excelência. Me obrigar a entregar um site por dia está acelerando meu aprendizado em um nível que eu nunca imaginaria ser possível. O mundo da programação é vasto e infinito. Se eu quisesse fazer um site por dia até meu último dia na Terra, teria material o suficiente disponível. 

Então, se você quer começar a estudar programação ou está travado achando que não está evoluindo, coloque algum site no ar e mande para seus amigos mais próximos. Isso irá te motivar a continuar estudando e se aprimorando. Posso dizer isso por experiência própria, agora.

Até o próximo site e rumo ao próximo nível! 🚀🚀🚀