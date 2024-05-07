#language: pt

Funcionalidade: Atualizar usuário
Como visitante do portal Raro CRUD Front-end
Quero ter acesso a lista de usuários cadastrados
Para alterar atualizando as informações de usuários no banco de dados do portal

Contexto: Atualizar informações de usuários
Dado que eu acesse a lista de usuários do portal Raro CRUD 
 
Cenário: Deve ser possível alterar os dados de usuário com sucesso
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E editar o nome do usuário
E editar o email do usuário
E salvar as alterações
Então deve retornar uma mensagem: Informações atualizadas com sucesso!

Cenário: Deve retornar mensagem de sucesso mesmo sem realizar alterações
Quando eu selecionar a opção ver detalhes
E selecionar a opção salvar
Então deverá retornar uma mensagem: Informações atualizadas com sucesso!

Cenário: Não deve permitir atualizar usuário cujo nome tenha mais de 100 caracteres
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome com mais de 100 caracteres
E informar um novo email
E salvar as alterações
Então deve exibir uma mensagem de alerta: Informe no máximo 100 caracteres para o nome

Cenário: Deve atualizar usuário cujo nome tenha 100 caracteres
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome com 100 caracteres
E informar um novo email
E salvar as alterações
Então deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve permitir atualização de usuário cujo nome tenha menos de 4 caracteres
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome com menos de 4 caracteres
E informar um novo email
E salvar as alterações
Então deve exibir uma mensagem de alerta: Informe pelo menos 4 letras para o nome

Cenário: Deve atualizar usuário cujo nome tenha 4 caracteres
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome com 4 caracteres
E informar um novo email
E salvar as alterações
Então deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve permitir atualização de usuário cujo nome possua apenas caracteres númericos
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome com caracteres numéricos
E informar um novo email
E salvar as alterações
Então deve exibir uma mensagem de alerta: Formato do nome é inválido.

Cenário: Não deve permitir atualização de usuário cujo nome possua caracteres alfanuméricos
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome com caracteres alfanuméricos
E informar um novo email
E salvar as alterações
Então deve exibir uma mensagem de alerta: Formato do nome é inválido.

Cenário: Não deve permitir atualização de usuário cujo nome possua caracteres especiais
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome com caracteres especiais
E informar um novo email
E salvar as alterações
Então deve exibir uma mensagem de alerta: Formato do nome é inválido.

Cenário: Não deve permitir atualização de usuário cujo nome misture caracteres comuns e especiais
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome com caracteres comuns e especiais juntos
E informar um novo email
E salvar as alterações
Então deve exibir uma mensagem de alerta: Formato do nome é inválido.

Cenário: Não deve permitir atualização de usuário cujo nome seja vazio
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E deixar o campo nome vazio
E informar um novo email
E salvar as alterações
Então deve exibir uma mensagem de alerta: O campo nome é obrigatório.

Cenário: Não deve atualizar usuário quando o email não possuir um @
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome
E informar um novo email sem a presença de um @
E salvar as alterações
Então deve exibir uma mensagem de alerta: Formato de e-mail inválido.

Cenário: Não deve atualizar usuário quando o email possuir mais de 60 caracteres
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome 
E informar um novo email com mais de 60 caracteres
E salvar as alterações
Então deverá exibir mensagem de alerta: Formato de e-mail inválido

Cenário: Deve atualizar usuário cujo email possua 60 caracteres
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome
E informar um novo email com 60 caracteres
E salvar as alterações
Então deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve atualizar usuário quando o email possuir menos de 4 caracteres
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome
E informar um novo email com menos de 4 caracteres
E salvar as alterações
Então deve exibir uma mensagem de alerta: Informe pelo menos 4 caracteres para o e-mail.

Cenário: Deve ser possível atualizar usuário quando o nome possuir espaçamentos
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome contendo espaçamentos
E um novo email
E salvar as alterações
Então deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Deve atualizar usuário cujo email possua mais de 4 caracteres
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome
E informar um novo email com mais de 4 caracteres
E salvar as alterações
Então deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve atualizar usuário quando o email for vazio
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome
E o campo email estiver vazio
E salvar as alterações
Então deve exibir uma mensagem de alerta: O campo e-mail é obrigatório.

Cenário: Não deve cadastrar um usuário quando o email já  estiver sendo utilizado por outro usuário
Quando eu selecionar a opção ver detalhes
E selecionar a opção editar
E informar um novo nome
E informar novamente um email já cadastrado no portal Raro CRUD
E salvar as alterações
Então deve exibir uma mensagem de alerta: Este e-mail já é utilizado por outro usuário.