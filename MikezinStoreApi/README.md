"npm init -y": inicia o projeto node js criando o package.json, o -y indica que ele 
ira colocar as informações padrão do projeto no arquivo package.json, sem perguntar
elas pro usuario.

"npm add express": instala o framework express no projeto, criando o node_modules
arquivos para o express funcionar, suas dependencias e bibliotecas

"import express from 'express' " aqui importamos o modulo express para o projeto, um modulo é compo se fosse uma classe, com atributos e métodos, em que retornamos algo, no caso, é retornado a funcao express() que cria uma aplicacao express. 

"const app = express()" recebe a instancia da aplicação express e nomeia de "app", ele representa o servidor web e vai definir as rotas e requisicoes

"app.listen(3000, function() {
    console.log("servidor aberto mo")
})" o metodo .listen() inicia o servidor, o primeiro argumento é o numero da porta em que ele ta rodando, o segundo argumento é uma função callback que sera chamada quando o servidor estiver aberto com sucesso.

funcao callback: uma função que passada como argumento de outra função e é chamada após
essa função completar alguma rotina ou ação. Geralmente são utilizadas para que algo seja executado apos o termino de uma tarefa assincrona, como requisições de redes ou leitura de arquivos.

tarefas assincronas: tarefas que ocorrem sem atrapalhar a execução do programa, ao inves de parar tudo e esperar a conclusao de uma tarefa, não, ele continua o fluxo do programa e quando ele receber uma resposta, ele lida com essa resposta.

usar o nome da entidade que estamos manipulando ou recuperando dados nos endpoints

CONTROLLERS: lida com as requisicoes http, mapeando os endpoints para as funções necessárias. Recebem as entradas dos usuarios. Ele chama o metodo dos services

SERVICES: responsaveis pelas logicas de negocios da aplicacao. Fornecem uma abstração para o acesso e manipulação dos dados, implementando regras de negocio. Ele chama o metodo dos repositories

REPOSITORIES: lidam com a persistencia dos dados, fazendo contato com os arquivos do banco de dados e enviando o tipo de consulta a ser realizada.