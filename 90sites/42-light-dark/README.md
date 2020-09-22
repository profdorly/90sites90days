##### Desafio: desenvolvendo um site por dia por 90 dias 

# [Site #42 - Light-Dark](https://www.dorlyneto.com/90sites/42-light-dark)

Quando o hype do dark mode começou, eu embarquei junto. De um dia para o outro, mudei a configuração de todos os meus aplicativos, começando pelo MacOS. Nas primeiras semanas estava tudo bem, até que não estava mais. Comecei a sentir dificuldades de ler. Minha visão, por incrível que pareça, estava ficando mais cansada. Eu precisava me esforçar mais para ler textos simples.

Fiquei encucado com isso. Pesquisando mais sobre o assunto, descobri que pessoas que possuem astigmatismo experimentam mais dificuldades ao ler textos em fontes claras e fundos escuros. Eu uso óculos desde os meus 7 anos e tenho um grau razoável deste problema. 

O dark mode não funcionou para mim. E talvez não esteja funcionando para você também.

Para as pessoas que funcionam, não há motivo algum para voltar à luz. Porém, se você também está experimentando dificuldades ao usar o dark mode, não deixe o hype te impedir de voltar para o outro modo. Sua saúde e conforto sempre em primeiro lugar.

* [Acesse o site 42 - Light-Dark](https://www.dorlyneto.com/90sites/42-light-dark)

## O que aprendi na construção deste site?

Tenho gostado bastante de acompanhar o dev Florin Pop. Ele é um ótimo produtor de conteúdo e faz um excelente trabalho no compartilhamento de conhecimento em seu canal no YouTube. Para o site de hoje, usei como base o seu desafio de criar 10 projetos Javascript em uma hora:
[![10 JavaScript Projects in 1 Hour - Coding Challenge](https://img.youtube.com/vi/8GPPJpiLqHk/maxresdefault.jpg)](https://youtu.be/8GPPJpiLqHk)

Achei muito simples a forma transicionar entre o light e o dark mode através de um botão, modificando o ```background-color``` e o ```color``` do CSS. O efeito acontece pois adiciona-se uma classe ao ```<body>``` no momento em que o botão é clicado. O código para fazer tal efeito é imensamento ridículo de simples:
```
toggle.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
});
```

Gostou? Que tal aplicar esta solução em seu próximo projeto?

---

Até a próxima e rumo ao próximo nível! 🚀🚀🚀



