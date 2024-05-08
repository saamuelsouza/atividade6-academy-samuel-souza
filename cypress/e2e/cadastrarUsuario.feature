#language: pt

Funcionalidade: Criar usuário
Como visitante do portal Raro CRUD
Quero poder acessar a página de novo usuário
Para me cadastrar no banco de dados do portal

Contexto: Proceder criação de novo usuário
Dado que acessei a página de criação de novo usuário no Portal Raro CRUD

Cenário: Cadastrar usuário
Quando informar o novo nome
E informar o novo email
E confirmar a operação
Então deve exibir a mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve permitir cadastro de usuário cujo nome tenha mais de 100 caracteres
Quando eu informar o novo nome com mais de 100 caracteres
E informar o novo email
E confirmar a operação
Então deve exibir a mensagem de alerta: Informe no máximo 100 caracteres para o nome

Cenário: Deve cadastrar usuário cujo nome tenha 100 caracteres
Quando eu informar o novo nome com 100 caracteres
E informar o novo email
E confirmar a operação
Então deve exibir a mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve permitir cadastro de usuário cujo nome tenha menos de 4 caracteres
Quando eu informar o novo nome com menos de 4 caracteres
E informar o novo email
E confirmar a operação
Então deve exibir a mensagem de alerta: Informe pelo menos 4 letras para o nome

Cenário: Deve cadastrar usuário cujo nome tenha 4 caracteres
Quando eu informar o novo nome com 4 caracteres
E informar o novo email
E confirmar a operação
Então deve exibir a mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve permitir cadastro de usuário cujo nome possua apenas caracteres númericos
Quando eu informar o novo nome com caracteres numéricos
E informar o novo email
E confirmar a operação
Então deve exibir uma mensagem de alerta: Formato do nome é inválido.

Cenário: Não deve permitir cadastro de usuário cujo nome possua caracteres alfanuméricos
Quando eu informar o novo nome com caracteres alfanuméricos
E informar o novo email
E confirmar a operação
Então deve exibir a mensagem de alerta: Formato do nome é inválido.

Cenário: Não deve permitir cadastro de usuário cujo nome possua caracteres especiais
Quando eu informar o novo nome com caracteres especiais
E informar o novo email
E confirmar a operação
Então deve exibir a mensagem de alerta: Formato do nome é inválido.

Cenário: Não deve permitir cadastro de usuário cujo nome misture caracteres comuns e especiais
Quando eu informar o novo nome com caracteres comuns e especiais juntos
E informar o novo email
E confirmar a operação
Então deve exibir a mensagem de alerta: Formato do nome é inválido.

Cenário: Não deve permitir cadastro de usuário cujo nome seja vazio
Quando eu deixar o campo nome vazio
E informar o novo email
E confirmar a operação
Então deve exibir a mensagem de alerta: O campo nome é obrigatório.

Cenário: Não deve criar usuário quando o email não possuir um @
Quando eu informar o novo nome
E informar o novo email sem a presença de um @
E confirmar a operação
Então deve exibir a mensagem de alerta: Formato de e-mail inválido.

Cenário: Não deve criar usuário quando o email possuir mais de 60 caracteres
Quando informar o novo nome 
E informar o novo email com mais de 60 caracteres
E confirmar a operação
Então deverá exibir a mensagem de alerta: Formato de e-mail inválido

Cenário: Deve cadastrar usuário cujo email possua 60 caracteres
Quando eu informar o novo nome
E informar o novo email com 60 caracteres
E confirmar a operação
Então deve exibir a mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve criar usuário quando o email possuir menos de 4 caracteres
Quando eu informar o novo nome
E informar o novo email com menos de 4 caracteres
E confirmar a operação
Então deve exibir a mensagem de alerta: Informe pelo menos 4 caracteres para o e-mail.

Cenário: Deve ser possível criar usuário quando o nome possuir espaçamentos
Quando eu informar o novo nome contendo espaçamentos
E o novo email
E confirmar a operação
Então deve exibir a mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Deve cadastrar usuário cujo email possua mais de 4 caracteres
Quando eu informar o novo nome
E informar o novo email com mais de 4 caracteres
E confirmar a operação
Então deve exibir a mensagem de sucesso: Usuário salvo com sucesso!

Cenário: Não deve criar usuário quando o email for vazio
Quando eu informar o novo nome
E o campo email se encontrar vazio
E confirmar a operação
Então deve exibir mensagem de alerta: O campo e-mail é obrigatório.

Cenário: Não deve cadastrar um usuário quando o email já  estiver sendo utilizado por outro usuário
Quando eu informar o novo nome
E informar novamente o email já cadastrado no portal Raro CRUD
E confirmar a operação
Então deverá exibir  mensagem de alerta: Este e-mail já é utilizado por outro usuário.