# Bem vindo(a) ao repositório do projeto To-do List Api.

## Contexto

Aplicação front-end desenvolvida com React tendo como objetivo o gerenciamento de tarefas criadas por um usuário previamente cadastrado através de uma tela de cadastro, tendo o acesso à tela de tarefas através de uma tela de login.

Através da tela de tarefas, é possível criar, visualizar e remover tarefas. Também é possível modificar as informações de cada tarefa criada.

Esta aplicação é parte integrante de uma aplicação fullstack desenvolvida a partir da Stack <strong>MERN</strong> (MongoDB Express React NodeJS), utiliza arquitetura em camadas (MSC - Model Service Controllers).

------------
### Veja a aplicação no ar por este link: https://frontend-todolist-cris.herokuapp.com/
------------

## Instruções para rodar o projeto localmente

1. abra o terminal e clone o repositório do projeto frontend_todolist:
`git clone git@github.com:cristianocsl/frontend_todolist.git`

2. entre no diretório frontend_todolist:
<code>cd frontend_todolist</code>

3. instale as dependências com <code>npm install</code>

4. para iniciar a aplicação, execute <code>npm start</code>

5. a aplicação estará disponível em `http://localhost:3000`

6. para interromper a execução da aplicação, execute `ctrl + c`


## Tela de login


A primeira tela da aplicação é de login. Nela, deve-se informar o email e senha criados no momento do cadastro (ver imagens). Serão mostradas mensagens informativas em caso de email inexistente ou incorreto, de senha incorreta ou de campo não preenchido. Caso ainda não tenha feito o cadastro do usuário, é possível acessar a tela de cadastro no link `Sign Up`.

<div align="center">
  <img src="https://user-images.githubusercontent.com/82241160/157141207-b4c79155-f5c1-4250-89f1-f8395bed27c0.png" height="500px" />
  <img src="https://user-images.githubusercontent.com/82241160/157141307-7ff8108c-1c9c-41bc-8feb-dab7bbb0365d.png" height="500px" />
  <img src="https://user-images.githubusercontent.com/82241160/157141385-17d37ffd-0c35-402c-aa23-11b5660c8d97.png" height="500px" />|
  <img src="https://user-images.githubusercontent.com/82241160/157141549-4e67e90b-72fa-4867-b6b5-7a9d854c5e36.png" height="500px" />
  <img src="https://user-images.githubusercontent.com/82241160/157141600-ed22a5d1-4346-41de-bcf5-41582663917d.png" height="500px" />
</div>


## Tela de cadastro

A tela de cadastro é composta dos campos name, email e password. Os campos não podem estar vazios. Caso estejam, será mostrada uma mensagem pedindo o preenchimento do campo (ver imagens). Também haverá mensagens de erro caso os campos name e password não tenham a quantidade mínima de caracteres exigidos, ou caso o email cadastrado já exista no banco de dados, ou ainda se o email passado para o campo não seja um email válido.

<div align="center">
  <img src="https://user-images.githubusercontent.com/82241160/157142167-eaf8d3b0-8067-4292-acf0-3ccef3c84d5f.png" height="500px" />
  <img src="https://user-images.githubusercontent.com/82241160/157142169-e1ed46f3-4a19-461e-b0c7-beb6a58a699c.png" height="500px" />
  <img src="https://user-images.githubusercontent.com/82241160/157142171-137692da-f635-47ee-9cb6-ddb85665389d.png" height="500px" />|
  <img src="https://user-images.githubusercontent.com/82241160/157142172-c3c65a30-a94c-405e-bb7d-b2b81dd38d5e.png" height="500px" />
  <img src="https://user-images.githubusercontent.com/82241160/157142174-c1e42c4c-72ca-428b-b6bd-2a6014262f09.png" height="500px" />
</div>

## Ferramentas utilizadas

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript);
- [MongoDB Atlas](https://www.mongodb.com/atlas/database): serviço de banco de dados de documentos em nuvem global para aplicações modernas;
- [React]();
- [Heroku](https://id.heroku.com/): plataforma de hospedagem, configuração, testagem e publicação de projetos virtuais na nuvem. 

## Bibliotecas

- [eslint](https://www.npmjs.com/package/eslint): padrão de estilização de código;
- [http-status-codes](https://www.npmjs.com/package/http-status-codes): facilitar legibilidade dos códigos http;
- [joi](https://www.npmjs.com/package/joi): validação de requisições;

## Contatos

- Email: cslcristiano@gmail.com
- LinkedIn: https://www.linkedin.com/in/cristianoseabralima/
- Github: https://github.com/cristianocsl




