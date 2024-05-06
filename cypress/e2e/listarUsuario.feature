#language: pt

Funcionalidade: Listar usuário
Como visitante do portal Raro CRUD
Quero ter acesso a lista de usuários cadastrados
Para visualizar as informações destes usuários no banco de dados do portal

Contexto: Visualizar a lista de usuários e suas informações
Dado que eu acesse a página de usuários do portal Raro CRUD 

Cenário: Deve ser possível consultar a lista de usuários

Cenário: Deve ser possível cadastrar um usuário caso não exista nenhum ao listar usuários
Quando eu visualizar que não há usuários cadastrados
E selecionar o botão com a opção "novo"
E informar um novo "nome"
E informar um novo "email"
E confirmar a operação
Então deve exibir uma mensagem de sucesso: "Usuário salvo com sucesso!"

Cenário: Deve existir a paginação se existir mais de 6 usuários cadastrados

Cenário: Não deve exibir a opção "próxima página" se ela estiver vazia

Cenário: Deve ser possível listar usuários através da navegação entre páginas da lista de usuários 
Quando eu selecionar o botão com a opção "Próxima"
E após isto selecionar o botão com a opção "Anterior"
Então deve alterar a "páginação atual"

Cenário: Deve ser possível visualizar a opção detalhes de usuário
Quando eu identificar um usuário especifíco na lista de usuários 
E selecionar a opção "Ver detalhes"
Então deverá retornar as informações do usuário selecionado

Cenário: Deve ser possível visualizar a opção excluir usuário






