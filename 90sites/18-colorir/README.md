##### Desafio: desenvolvendo um site por dia por 90 dias 

# [Site #18 - Colorir](https://www.dorlyneto.com/90sites/18-colorir)

## 

De todas as artes, a do desenho sempre foi a que tive menos aptidão. Mesmo assim, adorava jogos de colorir. Adoro até hoje, para ser sincero. Desenhar exige noção estética, e também um pouco de raciocínio matemático.

No movimento modernista, todas as artes quebraram as barreiras dos padrões, inclusive o desenho/pintura. Desde o século XX pra cá, a arte é livre, bem como seu entendimento.

O site de hoje é uma forma de permitir a todos nós a possibilidade de desenhar e explorar cores.

* [Acesse o site #18 - Colorir](https://www.dorlyneto.com/90sites/18-colorir)

## O que aprendi na construção deste site?

Usei como base para fazer este site um tutorial criado pelo dev Wes Bos em seu projeto Javascript30: https://javascript30.com/

Consiste em um ```<canvas>``` que ganha vida através do Javascript. No tutorial original, o canvas estava em branco. Como achei que o site ficaria pouco intuitivo sem algum texto explicativo, decidi colocar os seguintes comandos para imprimir um texto no canvas:

```
ctx.font = "3rem Arial";
    ctx.fillText("Jogue sua criatividade aqui!😄", window.innerWidth / 3.5, window.innerHeight / 2);
ctx.font = "1.5rem Arial";
    ctx.fillText("(Apenas com mouse, por enquanto 🐭)", (window.innerWidth / 2.9) + 20, (window.innerHeight / 2) + 50);
```

Não sei se é a melhor forma de aplicar o texto, mas resolveu.

### Fracassei em adaptar o site para mobile

Consegui apenas que este site funcionasse em computador, pela necessidade do uso de mouse. Não é o ideal, pois queria que ele funcionasse em celular também. Porém, não consegui adaptar o código a essa realidade. Convido vocês a fazer uma PR nesse projeto, o adaptando para mobile. O que acham?

---

Até a próxima e rumo ao próximo nível! 🚀🚀🚀