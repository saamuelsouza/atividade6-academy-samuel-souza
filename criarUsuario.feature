#language: pt

Funcionalidade: Criar usuário
Como visitante do portal Raro CRUD Front-end
Quero poder acessar a página de novo usuário
Para poder me cadastrar no banco de dados do portal

Contexto: Proceder criação de novo usuário
Dado que eu acesse a página de criação de novo usuário no Portal Raro CRUD

Cenário: Autenticação válida
Quando eu digitar o nome "Joãozinho da Raro"
E o email "joão@raroacademy.com"
Então deve exibir uma mensagem de sucesso: "Usuário salvo com sucesso!"

Cenário: Criar usuário com um email já cadastrado no sistema
Quando eu digitar novamente um email já cadastrado no portal Raro CRUD
Então deve exibir uma mensagem de alerta: "User already exists."

Esquema do Cenário: Cadastrar múltiplos usuários (cenários de nome)
Quando eu digitar o <email>
E o <nome>
Então deve exibir a <mensagem> .

Exemplos:
| email                      | nome                     | mensagem                                       |
| "joão@raroacademy.com"     | "> 0 e < 101 caracteres" | "usuário cadastrado com sucesso"               |
| "maria@raroacademy.com"    | "<= 0 caracteres"        | "O campo nome é obrigatório"                   |
| "joaquina@raroacademy.com" | ">= 101 caracteres"      | "Informe no máximo 100 caracteres para o nome" |

Esquema do Cenário: Cadastrar múltiplos usuários (cenários de email)
Quando eu digitar o <email>
E o <nome>
Então deve exibir a <mensagem> .

Exemplos:
| email              | nome                | mensagem                                        |
| ">= 60 caracteres" | "João Silva"        | "usuário cadastrado com sucesso"                |
| "<= 61 caracteres" | "Maria Pereira"     | "Informe no máximo 60 caracteres para o e-mail" |
| "<= 0 caracteres"  | "Joaquina de Jesus" | "O campo e-mail é obrigatório"                  |

Cenário: Criar usuário com um email inválido (Faltando o "@")
Quando eu digitar o nome "Joaquim"
E o email "joaquimraroacademy.com"
Então deve exibir uma mensagem de alerta: "Formato de e-mail inválido".

Cenário: Criar usuário com espaços em branco no início e no final do email.
Quando eu digitar o nome "José"
E o email "      josé@raroacademy.com       "
Então deve exibir uma mensagem de sucesso: "Usuário salvo com sucesso!".

Cenário: Criar usuário com caracteres especiais no nome.
Quando eu digitar o nome "S@muel Souz#"
E o email "samuel@raro.com"
Então deve exibir uma mensagem de alerta: "Formato do nome é inválido".

Cenário: Criar usuário com números no nome de usuário.
Quando eu digitar o nome "S4mu3l Sou2a"
E o email "samuel@raro.com"
Então deve exibir uma mensagem de alerta: "Formato do nome é inválido".