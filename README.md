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
</div>

|Tela de login|Mensagem de erro com campo em branco|Mensagem de erro com senha incorreta|
|:-:|:-:|:-:|
|<img src="https://user-images.githubusercontent.com/82241160/157121087-323cede0-99df-41c0-9971-ac9e815463a0.png" height="500px" />|<img src="https://user-images.githubusercontent.com/82241160/157124937-4b22afef-6c9e-4f2d-92ed-ddcfc6a112ed.png" height="500px" />|<img src="https://user-images.githubusercontent.com/82241160/157125799-6536d03d-2433-4a46-81a5-0199b0e15489.png" height="500px" />|

|Mensagem de erro por usuário não existe ou email incorreto|Login efetuado com sucesso|
|:-:|:-:|
|<img src="https://user-images.githubusercontent.com/82241160/157126761-133e6bc8-6c55-4f59-a176-6af97c14b0b1.png" height="500px" />|<img src="https://user-images.githubusercontent.com/82241160/157129896-46202734-83fb-4170-9cdc-9dcf4a00b67a.png" height="500px" />|


## Tela de cadastro

A tela de cadastro é composta dos campos name, email e password. Os campos não podem estar vazios. Caso estejam, será mostrada uma mensagem pedindo o preenchimento do campo (ver imagens). Também haverá mensagens de erro caso os campos name e password não tenham a quantidade mínima de caracteres exigidos, ou caso o email cadastrado já exista no banco de dados, ou ainda se o email passado para o campo não seja um email válido.

|Cadastrado com sucesso|Erro: usuário já cadastrado|Erro: nome com menos de 3 caracteres|
|:-:|:-:|:-:|
|<img src="https://user-images.githubusercontent.com/82241160/157132188-6351b3f9-e34d-4344-a6c7-4aa4ecea3c15.png" height="500px" />|<img src="https://user-images.githubusercontent.com/82241160/157132243-d8815675-4f50-42e1-aaf8-6ffc8ae6cca5.png" height="500px" />|<img src="https://user-images.githubusercontent.com/82241160/157134691-c3bcdf92-0fa6-4380-ace4-918eed6a24d6.png" height="500px" />|


|Erro: senha com menos de 6 caracteres|Erro: email com formato inválido|
|:-:|:-:|
|<img src="https://user-images.githubusercontent.com/82241160/157135673-807d9d64-3544-4f58-a026-30b5ae1f53cc.png" height="500px" />|<img src="https://user-images.githubusercontent.com/82241160/157135305-11ba9726-3633-4863-9140-879c7c031de6.png" height="500px" />|

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




