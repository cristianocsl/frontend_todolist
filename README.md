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

|Tela de login|Mensagem de erro com campo em branco|Mensagem de erro com senha incorreta|
|:-:|:-:|:-:|
|<img src="https://user-images.githubusercontent.com/82241160/157121087-323cede0-99df-41c0-9971-ac9e815463a0.png" height="500px" />|<img src="https://user-images.githubusercontent.com/82241160/157124937-4b22afef-6c9e-4f2d-92ed-ddcfc6a112ed.png" height="500px" />|<img src="https://user-images.githubusercontent.com/82241160/157125799-6536d03d-2433-4a46-81a5-0199b0e15489.png" height="500px" />|

|Mensagem de erro por usuário não existe ou email incorreto|Login efetuado com sucesso|
|:-:|:-:|
|<img src="https://user-images.githubusercontent.com/82241160/157126761-133e6bc8-6c55-4f59-a176-6af97c14b0b1.png" height="500px" />|<img src="https://user-images.githubusercontent.com/82241160/157129896-46202734-83fb-4170-9cdc-9dcf4a00b67a.png" height="500px" />|


## Tela de cadastro


|Tela de cadastro|Mensagem de erro devido a usuário já cadastrado|
|:-:|:-:|
|<img src="https://user-images.githubusercontent.com/82241160/157132188-6351b3f9-e34d-4344-a6c7-4aa4ecea3c15.png" height="500px" />|<img src="https://user-images.githubusercontent.com/82241160/157132243-d8815675-4f50-42e1-aaf8-6ffc8ae6cca5.png" height="500px" />|


|Mensagem de erro devido a senha incorreta|Mensagem de erro devido a usuário já cadastrado|
|:-:|:-:|
|<img src="https://user-images.githubusercontent.com/82241160/157132188-6351b3f9-e34d-4344-a6c7-4aa4ecea3c15.png" height="500px" />|<img src="https://user-images.githubusercontent.com/82241160/157132228-3b2a702f-dd44-4024-aba3-94f496f1984d.png" height="500px" />|

## Ferramentas utilizadas

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript);
- [MongoDB Atlas](https://www.mongodb.com/atlas/database): serviço de banco de dados de documentos em nuvem global para aplicações modernas;
- [React];
- [Heroku](https://id.heroku.com/): plataforma de hospedagem, configuração, testagem e publicação de projetos virtuais na nuvem. 

## Bibliotecas

- [eslint](https://www.npmjs.com/package/eslint): padrão de estilização de código;
- [http-status-codes](https://www.npmjs.com/package/http-status-codes): facilitar legibilidade dos códigos http;
- [joi](https://www.npmjs.com/package/joi): validação de requisições;

## Contatos

- Email: cslcristiano@gmail.com
- LinkedIn: https://www.linkedin.com/in/cristianoseabralima/
- Github: https://github.com/cristianocsl




