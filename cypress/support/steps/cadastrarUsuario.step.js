import CadastrarPage from "../page/cadastrar.page";
const paginaCadastrar = new CadastrarPage
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { faker } = require("@faker-js/faker");
const usuario = {
  name: `${faker.person.firstName()}Teste`,
  email: "",
};

var novoEmail;

beforeEach(() => {
  Given(
    "que acessei a página de criação de novo usuário no Portal Raro CRUD",
    function () {
     paginaCadastrar.visitarUrl()
    }
  );
});

When("informar o novo nome", function () {
  paginaCadastrar.typeNome(usuario.name)
});

When("informar o novo email", function () {
  novoEmail = faker.internet.email();
  paginaCadastrar.typeEmail(novoEmail)
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Usuário salvo com sucesso!")
      .should("be.visible");
  }
);

When("eu informar o novo nome com mais de 100 caracteres", function () {
  cy.get("#name").type(`${faker.string.alpha(101)}`, { delay: 0 });
});

When("informar o novo email", function () {
  novoEmail = faker.internet.email();
  paginaCadastrar.typeEmail(novoEmail)
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de alerta: Informe no máximo 100 caracteres para o nome",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Informe no máximo 100 caracteres para o nome")
      .should("be.visible");
  }
);

When("eu informar o novo nome com 100 caracteres", function () {
  cy.get("#name").type(`${faker.string.alpha(100)}`, { delay: 0 });
});

When("informar o novo email", function () {
  novoEmail = faker.internet.email();
  paginaCadastrar.typeEmail(novoEmail)
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});
Then(
  "deve exibir a mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Usuário salvo com sucesso!")
      .should("be.visible");
  }
);

When("eu informar o novo nome com menos de 4 caracteres", function () {
  cy.get("#name").type(`${faker.string.alpha(3)}`, { delay: 0 });
});

When("informar o novo email", function () {
  novoEmail = faker.internet.email();
  paginaCadastrar.typeEmail(novoEmail)
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de alerta: Informe pelo menos 4 letras para o nome",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Informe pelo menos 4 letras para o nome.")
      .should("be.visible");
  }
);

When("eu informar o novo nome com 4 caracteres", function () {
  cy.get("#name").type(`${faker.string.alpha(4)}`, { delay: 0 });
});

When("informar o novo email", function () {
  novoEmail = faker.internet.email();
  paginaCadastrar.typeEmail(novoEmail)
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Usuário salvo com sucesso!")
      .should("be.visible");
  }
);

When("eu informar o novo nome com caracteres numéricos", function () {
  cy.get("#name").type("12345");
});

When("informar o novo email", function () {
  novoEmail = faker.internet.email();
  paginaCadastrar.typeEmail(novoEmail)
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de alerta: Formato do nome é inválido.",
  function () {
    cy.get(":nth-child(3) > .sc-cPiKLX")
      .contains("Formato do nome é inválido.")
      .should("be.visible");
  }
);

When("eu informar o novo nome com caracteres alfanuméricos", function () {
  cy.get("#name").type("abc123");
});

When("informar o novo email", function () {
  novoEmail = faker.internet.email();
  paginaCadastrar.typeEmail(novoEmail)
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de alerta: Formato do nome é inválido.",
  function () {
    cy.get(":nth-child(3) > .sc-cPiKLX")
      .contains("Formato do nome é inválido.")
      .should("be.visible");
  }
);

When("eu informar o novo nome com caracteres especiais", function () {
  cy.get("#name").type("#$&*%@#$%");
});

When("informar o novo email", function () {
  novoEmail = faker.internet.email();
  paginaCadastrar.typeEmail(novoEmail)
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de alerta: Formato do nome é inválido.",
  function () {
    cy.get(":nth-child(3) > .sc-cPiKLX")
      .contains("Formato do nome é inválido.")
      .should("be.visible");
  }
);

When(
  "eu informar o novo nome com caracteres comuns e especiais juntos",
  function () {
    cy.get("#name").type("abc#$amu&l");
  }
);

When("informar o novo email", function () {
  novoEmail = faker.internet.email();
  paginaCadastrar.typeEmail(novoEmail)
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de alerta: Formato do nome é inválido.",
  function () {
    cy.get(":nth-child(3) > .sc-cPiKLX")
      .contains("Formato do nome é inválido.")
      .should("be.visible");
  }
);

When("eu deixar o campo nome vazio", function () {
  cy.get("#name").type(" ");
});

When("informar o novo email", function () {
  novoEmail = faker.internet.email();
  paginaCadastrar.typeEmail(novoEmail)
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de alerta: O campo nome é obrigatório.",
  function () {
    cy.get(".sc-jEACwC")
      .contains("Informe pelo menos 4 letras para o nome.")
      .should("be.visible");
  }
);

When("eu informar o novo nome", function () {
  paginaCadastrar.typeNome(usuario.name)
});

When("informar o novo email sem a presença de um @", function () {
  cy.get("#email").type("faltaarroba.com", { delay: 0 });
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de alerta: Formato de e-mail inválido.",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Formato de e-mail inválido")
      .should("be.visible");
  }
);

When("informar o novo nome", function () {
  paginaCadastrar.typeNome(usuario.name)
});

When("informar o novo email com mais de 60 caracteres", function () {
  cy.get("#email").type(
    `${faker.string.alpha(25)}@${faker.string.alpha(31)}.com`,
    { delay: 0 }
  );
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deverá exibir a mensagem de alerta: Formato de e-mail inválido",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Informe no máximo 60 caracteres para o e-mail")
      .should("be.visible");
  }
);

When("eu informar o novo nome", function () {
  paginaCadastrar.typeNome(usuario.name)
});

When("informar o novo email com 60 caracteres", function () {
  cy.get("#email").type(`${faker.string.alpha(50)}@gmail.com`, { delay: 0 });
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Usuário salvo com sucesso!")
      .should("be.visible");
  }
);

When("eu informar o novo nome", function () {
  paginaCadastrar.typeNome(usuario.name)
});

When("informar o novo email com menos de 4 caracteres", function () {
  cy.get("#email").type("abc", { delay: 0 });
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de alerta: Informe pelo menos 4 caracteres para o e-mail.",
  function () {
    cy.get(".sc-jEACwC")
      .contains("Informe pelo menos 4 caracteres para o e-mail.")
      .should("be.visible");
  }
);

When("eu informar o novo nome contendo espaçamentos", function () {
  cy.get("#name").type("       Luke Skywalker        ");
});

When("o novo email", function () {
  novoEmail = faker.internet.email();
  paginaCadastrar.typeEmail(novoEmail)
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Usuário salvo com sucesso!")
      .should("be.visible");
  }
);

When("eu informar o novo nome", function () {
  paginaCadastrar.typeNome(usuario.name)
});

When("informar o novo email com mais de 4 caracteres", function () {
  cy.get("#email").type(
    `${faker.string.alpha(1)}@${faker.string.alpha(1)}.cd`,
    { delay: 0 }
  );
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir a mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Usuário salvo com sucesso!")
      .should("be.visible");
  }
);

When("eu informar o novo nome", function () {
  paginaCadastrar.typeNome(usuario.name)
});

When("o campo email se encontrar vazio", function () {
  cy.get("#email").type(" ", { delay: 0 });
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir mensagem de alerta: O campo e-mail é obrigatório.",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("O campo e-mail é obrigatório.")
      .should("be.visible");
  }
);

When("eu informar o novo nome", function () {
  cy.intercept("POST", "/api/v1/users", {
    statusCode: 422,
    body: {
      error: "User already exists.",
    },
  }).as("postUsuario");
  cy.get("#name").type(usuario.name, { delay: 0 });
});

When(
  "informar novamente o email já cadastrado no portal Raro CRUD",
  function () {
    cy.get("#email").type("thata@gmail.com");
  }
);

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
  cy.wait("@postUsuario");
});

Then(
  "deve exibir a mensagem de alerta: Este e-mail já é utilizado por outro usuário.",
  function () {
    cy.get(".sc-dCFHLb")
      .contains("Este e-mail já é utilizado por outro usuário.")
      .should("be.visible");
  }
);