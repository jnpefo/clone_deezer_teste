Olá tudo bem? 

Esse projeto será uma pequena replica do Deezer, com algumas caracteriscas que irei implementar.

Utilizado React Redux, onde ire utilizar o redux-thunk para fazer requisições via axios da API do Deezer: https://developers.deezer.com/api.

Dificuldades:
A API precisa não responde de forma correta, tive que usar uma API que vem do herokuapp para não ter problemas de CORS, https://cors-anywhere.herokuapp.com/.

Depois de algumas requisições a API para de responder.

Para utilizar:
Ao fazer o clone do projeto, rode o npm intall, e npm start.

Para fazer:
Só conseguir entregar o item 1 da 1 º View.

Obs.: 
Acabei vendo o e-mail fora do prazo, onde não tive tanto tempo para realizar o desafio técnico, mas gostei de mexer na API do Deezer, assim que tiver mais tempo irei voltar a mexer para continuar a implementar. E não usar Redux em si, gosto mais do Tolkit ou  Context API.

Requisitos:
1º View:

Deverá apresentar a lista das principais músicas do momento listadas na Deezer;
Também deve existir um campo de pesquisa por texto onde podemos pesquisar por álbum, artista, ou título musical;
Quando realizar alguma pesquisa, a listagem inicial deve ser substituída pela listagem referente a pesquisa. (Usar o mesmo componente de listagem)


Os itens da lista devem apresentar:

Os dados da música como (capa do álbum, título, cantor, duração);
Um botão para acessar a musica completa no Deezer;
Um botão de play/pause para escutar a prévia da música;
Um botão para adicionar a música na lista de músicas favoritas;


2º View:

Será apresentada a lista com as músicas escolhidas pelo usuário na tela principal. A listagem deve ser semelhante a da tela inicial, porém deve mostrar o botão para remover da lista de favoritos.


Orientações:

Fique a vontade para escolher utilizar Hooks ou classes, mas não misture-os.
Use e Abuse do Redux! Precisamos saber o seu nível de familiaridade com ele.
A listagem de músicas favoritas deve estar contida em uma store do Redux, porém se quiser implementar algo para salvar no navegador a lista, seria bem legal, mas não é obrigatório.
A listagem de músicas vindas da API devem ser feitas através de paginação, fique a vontade para fazer como achar melhor, porém, um infinity scroll daria aquele toque a mais, fica a dica! 😉
