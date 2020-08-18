##### Desafio: desenvolvendo um site por dia por 90 dias 

# [Site #07 - Desconecte-se](https://www.dorlyneto.com/90sites/07-desconecte-se)

## Desconectar para conectar

Já ouviram falar dos imigrantes digitais? É toda pessoa que nasceu em um mundo onde as tecnologias digitais ainda não eram tão presentes em quase todos os âmbitos de sua vida. Talvez você seja um.

Como se identifica essa pessoa? É bem fácil: basta mostrar a imagem abaixo. Se a pessoa responder ```noooooosssaaaaaa```, com espanto e nostalgia, então ela é uma imigrante digital com toda a certeza.

![As saudosas páginas amarelas](https://i.pinimg.com/originals/7b/48/d6/7b48d66267bf6ebc98acb40aa5aac116.jpg)

Em contraponto, há os nativos digitais. São pessoas que não precisaram pedir táxi por telefone; que não sabem que a Angélica tem uma pinta marrom na perna (ou nem sabem quem é a Angélica); que não usaram o Windows 95 e nem mandaram um fax (ou nem sabem o que é um fax). São as pessoas que vivenciaram, desde o berço, todas as transformações que a tecnologia digital trouxe para nossa sociedade.

O site de hoje é para ambos os perfis. Independente de você ser imigrante ou nativo digital, a tecnologia permeia quase todos os aspectos do seu dia. Ficamos olhando para telas o tempo todo. E não saber equilibrar o uso das tecnologias digitais com a vida offline pode gerar problemas de saúde para o seu eu mais velho.

Sendo assim, desconecte-se um pouco. Vai te fazer bem. Aqui tem um guia de por onde você pode começar.

* [Acesse o site #07 - Desconecte-se](https://www.dorlyneto.com/90sites/07-desconecte-se)

## O que aprendi na construção deste site?

Eu estava pensando em fazer algo totalmente diferente hoje, até que acordei com duas mensagens, quase simultâneas, que mudaram meus planos. A primeira foi do grande amigo  [Tiago Maluta](https://github.com/maluta):

> Uma ideia pro seu sprint de criar um site por dia, durante 90 dias. https://maluta.github.io/offline/ 

Logo quando entrei e segui a instrução do site, meu cérebro explodiu 🤯. Eu AMEI a ideia dessa aplicação, e pedi permissão para replicá-la. 

Um pouco depois, o dev e empreendedor [João Gabriel Santos](https://github.com/jgabrielsantosc) me enviou um gif como sugestão para este projeto. Eu basicamente fundi as duas ideias e nasceu o Desconecte-se.

### Estava tudo dando certo, até começar a dar errado

Os aprendizados que coletei nos últimos 7 dias de código já estão surtindo um pouco de efeito. Passei bem menos perrengue para estilizar as informações. Me senti mais seguro de saber onde colocar o que. Fiz o site bem rapidinho. Porém, quando fiz o deploy e fui testar... percebi que o gif não iria abrir logo depois de pedir para a pessoa desligar a internet! kkkkkkk

Eu comecei a fritar a cabeça para pensar no que poderia ser uma solução. Perguntei ao Google: "será que tem alguma forma de abrir a imagem antes, e deixar ela escondida?". Também fui conversar com outros amigos que estão me apoiando nessa jornada, e comecei a testar soluções.

Para fazer funcionar, eu criei uma tag para abrir a imagem antes no HTML:
```<img id="gif" src="assets/respire.gif" />```

Depois, configurei o Javascript para a imagem ficar escondida:
```document.getElementById("gif").style.display = "none";```

E funcionou! Foi uma felicidade sem tamanho perceber que eu já consigo pensar em um caminho de solução, buscar como executá-la e encontrar uma resposta plausível. Mesmo sendo um problema pequeno, isso aumenta a confiança e a motivação.

### Ainda falta criar 83 sites, mas ontem faltavam 84 e amanhã faltarão apenas 82

O segredo para me manter motivado neste desafio é olhar para um dia de cada vez. Se eu tentar ver muito longe, vou me assustar com quantos sites faltam para fazer. Por isso, foco no agora. Acabei de terminar um site, que está funcional, mesmo que simples. De um em um eu chegarei nos 90. 

---

Em breve reunirei os principais aprendizados não-técnicos dessa jornada. No mais, estou amando todas as mensagens que tenho recebido no meu LinkedIn. Fiquem à vontade para me adicionar lá e trocar ideia! Um dos grandes objetivos deste desafio é me aproximar de outras pessoas tão motivadas quanto eu a se desenvolverem.

Até o próximo site e rumo ao próximo nível! 🚀🚀🚀