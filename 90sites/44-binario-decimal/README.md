##### Desafio: desenvolvendo um site por dia por 90 dias 

# [Site #44 - Binário-Decimal](https://www.dorlyneto.com/90sites/44-binario-decimal)

Creio se tratar de um senso comum, dentro da nossa profissão, o fato de que nos comunicamos com as máquinas através do [sistema binário de numeração](https://canaltech.com.br/produtos/como-funciona-o-sistema-binario/). O famoso 0 ou 1. 

Esse sistema foi essencial para a criação dos computadores, pois naquela época era mais fácil da máquina interpretar comandos de sim (1) ou não (0), e assim formar lógicas de ação.

Muito provavelmente na escola você aprendeu a transformar números binários em decimais. Na verdade, para os jovens de hoje isso ainda é algo que se ensina nas aulas de matemática? Estou por fora.

* [Acesse o site 44 - Binário-Decimal](https://www.dorlyneto.com/90sites/44-binario-decimal)

## O que aprendi na construção deste site?

Hoje eu estudei o código do dev [João Victor Soares](https://github.com/itsJoaoVictor), disponibilizado em seu Codepen: https://codepen.io/itsJoaoVictor/pen/PoPJBxN

Adorei a simplicidade na qual as soluções foram propostas, além dos novos elementos que aprendi na análise do código criado por este jovem dev. 

Para realizar esta operação, o código Javascript proposto foi o seguinte: 

```
const errorEl = document.querySelector("span");
const decimalEl = document.getElementById("decimal");

const checkIfIsBinary = (val) =>
  val.match(/^[0-1]+$/) ? makeConversion(val) : callError();

const callError = () => (errorEl.innerHTML = "Coloque apenas 0 ou 1");

const makeConversion = (bin) => {
  errorEl.innerHTML = "";
  let decimal = parseInt(bin, 2);
  decimalEl.value = decimal;
};
```

---

Até a próxima e rumo ao próximo nível! 🚀🚀🚀



