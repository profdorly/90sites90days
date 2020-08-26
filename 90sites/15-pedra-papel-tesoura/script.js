var jogadorNome;
    var jogadorPontos = 0;
    var jogadorEscolha = 0;

    var computadorEscolha = 0;
    var computadorPontos = 0;

    function sortear(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function traduzirEscolha(numero) {
      if(numero == 1) {
        return 'Pedra';
      }
      else if(numero == 2) {
        return 'Papel';
      }
      else if(numero == 3) {
        return 'Tesoura';
      }
    }

    function selecionar(tipo, escolha) {
      document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
    }

    function deselecionar(tipo, escolha) {
      document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
    }

    function mensagem(texto){
      document.getElementById('mensagem').innerHTML = texto;
    }

    function definirJogadorNome(nome) {
      document.getElementById('jogador-nome').innerHTML = nome;
    }

 
    function calcularEscolha(jogador, computador) {
      if (jogador == 1 && computador == 1) {
        return 0;
      }
      else if (jogador == 1 && computador == 2) {
        return 2;
      }
      else if (jogador == 1 && computador == 3) {
        return 1;
      }
      else if (jogador == 2 && computador == 1) {
        return 1;
      }
      else if (jogador == 2 && computador == 2) {
        return 0;
      }
      else if (jogador == 2 && computador == 3) {
        return 2;
      }
      else if (jogador == 3 && computador == 1) {
        return 2;
      }
      else if (jogador == 3 && computador == 2) {
        return 1;
      }
      else if (jogador == 3 && computador == 3) {
        return 0;
      }
    }

    function somarPontoJogador() {
      jogadorPontos++;
      document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
    }

    function somarPontoComputador() {
      computadorPontos++;
      document.getElementById('computador-pontos').innerHTML = computadorPontos;
    }

    function jogar(escolha) {
      jogadorEscolha = escolha;
      selecionar('jogador', jogadorEscolha);

      computadorEscolha = sortear(1, 3);
      selecionar('computador', computadorEscolha);

      var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

      if (ganhador == 0) {
        mensagem('Empate');
      }
      else if (ganhador == 1) {
        mensagem('Ponto para ' + jogadorNome);
        somarPontoJogador();
      }
      else if (ganhador == 2) {
        mensagem('Ponto para o Computador');
        somarPontoComputador();
      }

      setTimeout(function() {
        deselecionar('jogador', jogadorEscolha);
        deselecionar('computador', computadorEscolha);
        mensagem(jogadorNome + ', escolha uma opção...');
      }, 3500);
    }

    document.getElementById('jogador-escolha-1').onclick = function(){ jogar(1); };
    document.getElementById('jogador-escolha-2').onclick = function(){ jogar(2); };
    document.getElementById('jogador-escolha-3').onclick = function(){ jogar(3); };

    jogadorNome = prompt("Qual é o seu nome?");
    definirJogadorNome(jogadorNome);

    mensagem('O jogo vai começar, ' + jogadorNome + '! Pedra, papel ou tesoura? Escolha acima.');