#language: pt

Funcionalidade: Listar usuário
Como visitante do portal Raro CRUD
Quero ter acesso a lista de usuários cadastrados
Para visualizar as informações destes usuários no banco de dados do portal

Contexto: Visualizar a lista de usuários e suas informações
Dado que eu acesse a página de usuários do portal Raro 

Cenário: Deve ser possível consultar a lista de usuários
Quando eu requisitar detalhes de um usuario
Então deve retornar as informações do usuário

Cenário: Deve ser possível cadastrar um usuário caso não exista nenhum ao listar usuários
Quando eu listar um usuário
Então deve exibir a opção Cadastre um novo usuário se não houver nenhum usuário cadastrado 

Cenário: Deve exibir a paginação se existir mais de 6 usuários cadastrados
Quando eu selecionar a opção próxima página
Então deverá conter '2 de' em páginação atual 

Cenário: Deve ser possível a navegação entre páginas da lista de usuários 
Quando eu selecionar o botão com a opção 'Próxima página'
Então deve alterar a 'páginação atual'

Cenário: Deve ser possível visualizar editar um usuário da lista
Quando eu buscar detalhes de um usuário especifíco
Então a opção de editar deverá estar visível

Cenário: Deve ser possível visualizar a opção excluir um usuário da lista
Quando eu selecionar a opção excluir 
Então deverá retornar uma mensagem 'Deseja realmente remover este usuário ?'
