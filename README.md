# TicTacToe

![Captura de tela 2022-06-07 192255](https://user-images.githubusercontent.com/74939512/172493113-31dd395e-7d61-407e-af7a-b1648eb55f71.png)


jogo da velha feito em nodejs com API de acesso a banco de dados sqlite3 em python

# Como não Funciona

O jogo funciona via online utilizando a biblioteca socket.io onde simutâneamente há a troca de dados entre os clientes e o servidor.Para jogar é necessário a criação de lobbys que possuem (obviamente) um limite de duas conexões simutâneas entre dois jogadores. Se algum dos jogadores sairem do lobby ou perder a conexão , automaticamente o cliente que permaneceu no lobby aguardará a entrada de outro player.

![Captura de tela 2022-06-07 191628](https://user-images.githubusercontent.com/74939512/172493797-8ba3a3d7-814a-411f-baad-046be2d3e438.png)

Ao entrar no servidor o cliente é direcionado a página principal onde ele pode escolher cria ou entrar em um novo lobby.Ao criar um lobby o jogador é redirecionado automaticamente no lobby aguardando outro jogador entrar.

![Captura de tela 2022-06-07 192010](https://user-images.githubusercontent.com/74939512/172494095-ba45c9f9-dfdb-4132-af87-1bb4fb77c04b.png)

Para que o lobby receba um novo jogador , é necessário que o cliente que criou o lobby compartilhe o código gerado pelo servido.O código consiste em 10 digitos com combinações de letras e números

![Captura2 de tela 2022-06-07 192010](https://user-images.githubusercontent.com/74939512/172494719-ecdd3920-2491-4db9-952a-5025fa965852.png)

O jogador que tiver posse do código de um lobby poderá acessa-lo na página principal passando o código e o seu nome, OBS: O nome deve ser diferente da pessoa que criou ou que está no lobby criado

![Captura de tela 2022-06-07 191922](https://user-images.githubusercontent.com/74939512/172495153-061ef734-303c-4c1c-a338-0c678072e005.png)

Feito tudo isso é possivel jogar o jogo via online com conexão em tempo real

![Captura de tela 2022-06-07 190357](https://user-images.githubusercontent.com/74939512/172495356-470ead42-1865-44a0-8726-cd33bd40e13a.png)

se o cliente tenta entrar em um lobby com duas conexões ou inesistente, será redirecionado automaticamente para a página principal

# Instalação

- Clone o repositorio 
- Entre no diretório com um terminal
- digite o comando <code>npm install </code>
- inicie o servidor com <code>npm run start</code>

# Observações

- A api feita em python ainda está em desenvolvimento e funcionará como uma forma de coletar  dados de partidar para a criação de um bot futuramente 

- O código é bem extenso e precisa ser refatorado ainda

- O front-end do programa ainda precisa ser feito

- ao iniciar o servidor , a cada segundo ele atualiza o estado e a quantidade de lobbys pelo terminal

- o javascript do cliente gera algums console.log durante a partida 

