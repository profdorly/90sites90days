##### Desafio: desenvolvendo um site por dia por 90 dias 

# [Site #19 - Olar](https://www.dorlyneto.com/90sites/19-olar)

## Como vai você?

[Meu site de número 5](https://www.dorlyneto.com/90sites/05-bomdiagrupo/) foi uma ode ao ```bom dia grupo!``` que recebemos de vez em sempre no grupo da família. O de hoje é uma ode ao ```olar``` que, para mim, é a melhor forma de cumprimentar uma pessoa no magnífico mundo das interwebs.

* [Acesse o site #19 - Olar](https://www.dorlyneto.com/90sites/19-olar)

## O que aprendi na construção deste site?

Já utilizei a função [```Math.random()```](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random) em diversos outros sites desse projeto. Dessa vez, a usei para criar um efeito de randomizar cores, baseado no [sistema de numeração hexadecimal](https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_hexadecimal). 

Para gerar uma combinação de cor diferente, utilizei a seguinte fórmula:

```
function getColor() {
  let color = "#";
  const charset = "0123456789ABCDEF";
  for (let i = 0; i <= 5; i++) {
    const take = Math.floor(Math.random() * 16);
    color += charset.charAt(take);
  }
  return color;
}
```

E para que a for fosse impressa em cada um dos elementos da página e variando em um intervalo específico, esta foi a solução:

```
setInterval(() => {
  const firstColor = getColor();
  hello.style.color = firstColor;
  body.style.backgroundColor = firstColor;
  box.style.backgroundColor = getColor();
}, 400);
```

Uma aplicação bem simples, que gerou um efeito legal. Foi bom para reforçar conhecimentos básicos do Javascript.

---

Até a próxima e rumo ao próximo nível! 🚀🚀🚀