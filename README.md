# Bem vindo(a) ao repositório do projeto To-do List Api.

## Contexto

Aplicação front-end desenvolvida com React tendo como objetivo o gerenciamento de tarefas criadas por um usuário previamente cadastrado através de uma tela de cadastro, tendo o acesso à tela de tarefas através de uma tela de login.

Através da tela de tarefas, é possível criar, visualizar e remover tarefas. Também é possível modificar as informações de cada tarefa criada.

Esta aplicação é parte integrante de uma aplicação fullstack desenvolvida a partir da Stack <strong>MERN</strong> (MongoDB Express React NodeJS), utiliza arquitetura em camadas (MSC - Model Service Controllers).

------------
### Veja a aplicação no ar por este link: https://frontend-todolist.vercel.app/
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

------------
<div align="center">
  <p>Tela de login</p>
  <img src="https://user-images.githubusercontent.com/82241160/163577544-66d39940-9f2f-468b-b5de-61b0b40ece45.jpg" height="500px" />
</div>
------------
<div align="center">
  <p>Mensagem de erro com email inválido</p>
  <img src="https://user-images.githubusercontent.com/82241160/163578530-b517aca8-d458-41fe-9347-0b4f5345b01f.jpg" height="500px" />
</div>

<div align="center">
  <p>Mensagem de senha incorreta</p>
  <img src="https://user-images.githubusercontent.com/82241160/163579175-83ab1c50-25f3-4e23-84cc-babc7f7a605a.jpg" height="500px" />
</div>

<div align="center">
  <p>Mensagem de usuário inexistente ou email incorreto</p>
  <img src="https://user-images.githubusercontent.com/82241160/163579421-214363fc-5e5c-45e2-b0c4-b79bd9680a2f.jpg" height="500px" />
</div>

<div align="center">
  <p>Mensagem de login efetuado com sucesso</p>
  <img src="https://user-images.githubusercontent.com/82241160/163579634-8dd20c91-6eee-4efa-8fa8-f7c43c3ef0b4.jpg" height="500px" />
</div>

## Tela de cadastro

A tela de cadastro é composta dos campos name, email e password. Os campos não podem estar vazios. Caso estejam, será mostrada uma mensagem pedindo o preenchimento do campo (ver imagens). Também haverá mensagens de erro caso os campos name e password não tenham a quantidade mínima de caracteres exigidos, ou caso o email cadastrado já exista no banco de dados, ou ainda se o email passado para o campo não seja um email válido.

<div align="center">
  <p>Mensagem de erro em caso de formato de email inválido</p>
  <img src="https://user-images.githubusercontent.com/82241160/163580125-3d91ab17-09d9-4a43-85ed-57a15a39a482.jpg" height="500px" />
</div>

<div align="center">
  <p>Mensagem de erro em caso de nome com menos de 3 caracteres</p>
  <img src="https://user-images.githubusercontent.com/82241160/163580406-1a0ae143-713f-4e6d-a262-b17e7bd2d645.jpg" height="500px" />
</div>

<div align="center">
  <p>Mensagem de erro em caso de senha com menos de 6 caracteres</p>
  <img src="https://user-images.githubusercontent.com/82241160/163580609-4f6eeab4-acdd-4ae3-879d-9e475882932b.jpg" height="500px" />
</div>

<div align="center">
  <p>Mensagem de erro em caso de usuário já registrado</p>
  <img src="https://user-images.githubusercontent.com/82241160/163580837-ae882741-07ec-41cd-b66e-439e3508628c.jpg" height="500px" />
</div>

<div align="center">
  <p>Usuário registrado com sucesso</p>
  <img src="https://user-images.githubusercontent.com/82241160/163581003-ab6a5552-126a-425a-801d-ab231127cca5.jpg" height="500px" />
</div>

## Ferramentas utilizadas

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript);
- [MongoDB Atlas](https://www.mongodb.com/atlas/database): serviço de banco de dados de documentos em nuvem global para aplicações modernas;
- [React](https://pt-br.reactjs.org/): Uma biblioteca JavaScript para criar interfaces de usuário;
- [Vercel](https://vercel.com/): plataforma primariamente voltada para sites estáticos e frameworks front-end. 

## Bibliotecas

- [eslint](https://www.npmjs.com/package/eslint): padrão de estilização de código;

## Contatos

- Email: cslcristiano@gmail.com
- LinkedIn: https://www.linkedin.com/in/cristianolimacsl/
- Github: https://github.com/cristianocsl




