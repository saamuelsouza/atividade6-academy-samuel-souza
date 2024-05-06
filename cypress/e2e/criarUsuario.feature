#language: pt

Funcionalidade: Criar usuário
Como visitante do portal Raro CRUD
Quero poder acessar a página de novo usuário
Para me cadastrar no banco de dados do portal

Contexto: Proceder criação de novo usuário
Dado que acessei a página de criação de novo usuário no Portal Raro CRUD

Cenário: Cadastrar usuário
Quando informar um novo nome
E informar um novo email
E confirmar a operação
Então deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve permitir cadastro de usuário cujo nome tenha mais de 100 caracteres
Quando eu informar um novo nome com mais de 100 caracteres
E informar um novo email
E confirmar a operação
Então deve exibir uma mensagem de alerta: Informe no máximo 100 caracteres para o nome

Cenário: Deve cadastrar usuário cujo nome tenha 100 caracteres
Quando eu informar um novo nome com 100 caracteres
E informar um novo email
E confirmar a operação
Então deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve permitir cadastro de usuário cujo nome tenha menos de 4 caracteres
Quando eu informar um novo nome com menos de 4 caracteres
E informar um novo email
E confirmar a operação
Então deve exibir uma mensagem de alerta: Informe pelo menos 4 letras para o nome

Cenário: Deve cadastrar usuário cujo nome tenha 4 caracteres
Quando eu informar um novo nome com 4 caracteres
E informar um novo email
E confirmar a operação
Então deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve permitir cadastro de usuário cujo nome possua apenas caracteres númericos
Quando eu informar um novo nome com caracteres numéricos
E informar um novo email
E confirmar a operação
Então deve exibir uma mensagem de alerta: Formato do nome é inválido.

Cenário: Não deve permitir cadastro de usuário cujo nome possua caracteres alfanuméricos
Quando eu informar um novo nome com caracteres alfanuméricos
E informar um novo email
E confirmar a operação
Então deve exibir uma mensagem de alerta: Formato do nome é inválido.

Cenário: Não deve permitir cadastro de usuário cujo nome possua caracteres especiais
Quando eu informar um novo nome com caracteres especiais
E informar um novo email
E confirmar a operação
Então deve exibir uma mensagem de alerta: Formato do nome é inválido.

Cenário: Não deve permitir cadastro de usuário cujo nome misture caracteres comuns e especiais
Quando eu informar um novo nome com caracteres comuns e especiais juntos
E informar um novo email
E confirmar a operação
Então deve exibir uma mensagem de alerta: Formato do nome é inválido.

Cenário: Não deve permitir cadastro de usuário cujo nome seja vazio
Quando eu deixar o campo nome vazio
E informar um novo email
E confirmar a operação
Então deve exibir uma mensagem de alerta: O campo nome é obrigatório.

Cenário: Não deve permitir cadastro de usuário cujo nome seja Nulo
Quando eu informar um nome nulo
E informar um novo email
E confirmar a operação
Então deve exibir uma mensagem de alerta: Informe pelo menos 4 letras para o nome.

Cenário: Não deve criar usuário com um email já cadastrado no sistema
Quando eu informar um novo nome
E informar novamente um email já cadastrado no portal Raro CRUD
E confirmar a operação
Então deve exibir uma mensagem de alerta: Este e-mail já é utilizado por outro usuário.

Cenário: Não deve criar usuário quando o email possuir mais de 60 caracteres
Quando eu informar um novo nome
E informar um novo email com mais de 60 caracteres
E confirmar a operação
Então deve exibir uma mensagem de alerta: Formato de e-mail inválido.

Cenário: Deve cadastrar usuário cujo email possua 60 caracteres
Quando eu informar um novo nome
E informar um novo email com 60 caracteres
E confirmar a operação
Então deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve criar usuário quando o email possuir menos de 4 caracteres
Quando eu informar um novo nome
E informar um novo email com menos de 4 caracteres
E confirmar a operação
Então deve exibir uma mensagem de alerta: Informe pelo menos 4 caracteres para o e-mail.

Cenário: Deve ser possível criar usuário quando o nome possuir espaçamentos
Quando eu informar um novo nome contendo espaçamentos
E um novo email
E confirmar a operação
Então deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Deve cadastrar usuário cujo email possua 4 caracteres
Quando eu informar um novo nome
E informar um novo email com 4 caracteres
E confirmar a operação
Então deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve criar usuário quando o email não possuir pelo menos 2 caracteres após o ponto
Quando eu informar um novo nome
E informar um novo email com menos de 2 caracteres após o ponto
E confirmar a operação
Então deve exibir uma mensagem de alerta: Formato de e-mail inválido.

Cenário: Deve criar um usuário quando o email possuir 2 caracteres após o ponto
Quando eu informar um novo nome
E informar um novo email com 2 caracteres após o ponto
E confirmar a operação
Então deve exibir uma mensagem de alerta: Usuário salvo com sucesso!

Cenário: Não deve criar usuário quando o email não possuir um @
Quando eu informar um novo nome
E informar um novo email sem a presença de um @
E confirmar a operação
Então deve exibir uma mensagem de alerta: Formato de e-mail inválido.

Cenário: Não deve criar usuário quando o email for nulo
Quando eu informar um novo nome
E informar um novo email nulo
E confirmar a operação
Então deve exibir uma mensagem de alerta: O campo e-mail é obrigatório.

Cenário: Não deve criar usuário quando o email for vazio
Quando eu informar um novo nome
E o campo email estiver vazio
E confirmar a operação
Então deve exibir uma mensagem de alerta: O campo e-mail é obrigatório.

Cenário: Deve ser possível criar usuário quando o email possuir espaços no início e/ou no final
Quando eu informar um novo nome
E o campo email possuir espaços em branco no início ou final
E confirmar a operação
Então deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!