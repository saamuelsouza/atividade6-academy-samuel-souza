#language: pt

Funcionalidade: Pesquisar usuário
Como visitante do portal Raro CRUD Front-end
Quero poder pesquisar usuários cadastrados
Para visualizar as informações retornadas

Contexto: Realizar pesquisa de usuários e informações
Dado que acessei a página de usuário no Portal Raro

Cenário: Deve ser possível buscar um usuário pelo nome
Quando incluir o nome de um usuário cadastrado
E acionar o recurso ver detalhes 
Então deverá validar as informações do mesmo

Cenário: Deve ser possível buscar um usuário pelo email
Quando incluir o email do usuário 
E acionar o recurso ver detalhes 
Então deverá validar as informações do mesmo

Cenário: Deve ser possível limpar o campo de pesquisa após digitação
Quando eu incluir informações na aba de pesquisa
Então deve ser possível limpar os caracteres utilizando o icone de limpeza.

Cenário: Deve retornar uma mensagem caso o usuário não for encontrado  
Quando eu buscar um usuário não cadastrado
Então deve retornar uma mensagem de alerta: "Ops! Não existe nenhum usuário para ser exibido."