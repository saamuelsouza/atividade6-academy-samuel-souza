import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { faker } = require("@faker-js/faker");
const usuario = {
  name: `${faker.person.firstName()}`,
  email: "",
};

var novoEmail;

beforeEach(() => {
  Given(
    "que acessei a página de criação de novo usuário no Portal Raro CRUD",
    function () {
      cy.visit(
        "https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/novo"
      );
    }
  );
});

When("informar um novo nome", function () {
  cy.get("#name").type(usuario.name, { delay: 0 });
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#email").type(novoEmail, { delay: 0 });
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Usuário salvo com sucesso!")
      .should("be.visible");
  }
);

When("eu informar um novo nome com mais de 100 caracteres", function () {
  cy.get("#name").type(`${faker.string.alpha(101)}`, { delay: 0 });
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#email").type(novoEmail, { delay: 0 });
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir uma mensagem de alerta: Informe no máximo 100 caracteres para o nome",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Informe no máximo 100 caracteres para o nome")
      .should("be.visible");
  }
);

When("eu informar um novo nome com 100 caracteres", function () {
  cy.get("#name").type(`${faker.string.alpha(100)}`, { delay: 0 });
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#email").type(novoEmail, { delay: 0 });
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});
Then(
  "deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Usuário salvo com sucesso!")
      .should("be.visible");
  }
);

When("eu informar um novo nome com menos de 4 caracteres", function () {
  cy.get("#name").type(`${faker.string.alpha(3)}`, { delay: 0 });
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#email").type(novoEmail);
});

When("confirmar a operação", function () {
  cy.get("button[type='submit']").click();
});

Then(
  "deve exibir uma mensagem de alerta: Informe pelo menos 4 letras para o nome",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Informe pelo menos 4 letras para o nome.")
      .should("be.visible");
  }
);

When("eu informar um novo nome com 4 caracteres", function () {
    cy.get("#name").type(`${faker.string.alpha(4)}`, { delay: 0 });
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#email").type(novoEmail);
});

When("confirmar a operação", function () {
    cy.get("button[type='submit']").click();
});

Then(
  "deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Usuário salvo com sucesso!")
      .should("be.visible");
  }
);

When("eu informar um novo nome com caracteres numéricos", function () {
    cy.get("#name").type("12345");
});

When("informar um novo email", function () {
    novoEmail = faker.internet.email();
    cy.get("#email").type(novoEmail);
});

When("confirmar a operação", function () {
    cy.get("button[type='submit']").click();
});

Then(
    "deve exibir uma mensagem de alerta: Formato do nome é inválido.",
  function () {
    cy.get(':nth-child(3) > .sc-cPiKLX').contains("Formato do nome é inválido.").should('be.visible')
  }
);

When("eu informar um novo nome com caracteres alfanuméricos", function () {
    cy.get("#name").type("abc123");
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#email").type(novoEmail);
});

When("confirmar a operação", function () {
    cy.get("button[type='submit']").click();
});

Then(
  "deve exibir uma mensagem de alerta: Formato do nome é inválido.",
  function () {
    cy.get(':nth-child(3) > .sc-cPiKLX').contains("Formato do nome é inválido.").should('be.visible')
}
);

When("eu informar um novo nome com caracteres especiais", function () {
    cy.get("#name").type("#$&*%@#$%");
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#email").type(novoEmail);
});

When("confirmar a operação", function () {
    cy.get("button[type='submit']").click();
});

Then(
  "deve exibir uma mensagem de alerta: Formato do nome é inválido.",
  function () {
    cy.get(':nth-child(3) > .sc-cPiKLX').contains("Formato do nome é inválido.").should('be.visible')
  }
);

When(
  "eu informar um novo nome com caracteres comuns e especiais juntos",
  function () {
    cy.get("#name").type("abc#$amu&l");
  }
);

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#email").type(novoEmail);
});

When("confirmar a operação", function () {
    cy.get("button[type='submit']").click();
});

Then(
  "deve exibir uma mensagem de alerta: Formato do nome é inválido.",
  function () {
    cy.get(':nth-child(3) > .sc-cPiKLX').contains("Formato do nome é inválido.").should('be.visible')
  }
);

When("eu deixar o campo nome vazio", function () {
    cy.get("#name").type(" ");
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#email").type(novoEmail);
});

When("confirmar a operação", function () {
    cy.get("button[type='submit']").click();
});

Then(
  "deve exibir uma mensagem de alerta: O campo nome é obrigatório.",
  function () {
    cy.get('.sc-jEACwC').contains("Informe pelo menos 4 letras para o nome.").should('be.visible')
}
);

When("eu informar um nome nulo", function () {});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#email").type(novoEmail);
});

When("confirmar a operação", function () {});

Then(
  "deve exibir uma mensagem de alerta: Informe pelo menos 4 letras para o nome.",
  function () {}
);

When("eu informar um novo nome", function () {});

When(
  "informar novamente um email já cadastrado no portal Raro CRUD",
  function () {}
);

When("confirmar a operação", function () {});

Then(
  "deve exibir uma mensagem de alerta: Este e-mail já é utilizado por outro usuário.",
  function () {}
);

When("eu informar um novo nome", function () {});

When("informar um novo email com mais de 60 caracteres", function () {});

When("confirmar a operação", function () {});

Then(
  "deve exibir uma mensagem de alerta: Formato de e-mail inválido.",
  function () {}
);

When("eu informar um novo nome", function () {});

When("informar um novo email com 60 caracteres", function () {});

When("confirmar a operação", function () {});

Then(
  "deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!",
  function () {}
);

When("eu informar um novo nome", function () {});

When("informar um novo email com menos de 4 caracteres", function () {});

When("confirmar a operação", function () {});

Then(
  "deve exibir uma mensagem de alerta: Informe pelo menos 4 caracteres para o e-mail.",
  function () {}
);

When("eu informar um novo nome contendo espaçamentos", function () {});

When("um novo email", function () {});

When("confirmar a operação", function () {});

Then(
  "deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!",
  function () {}
);

When("eu informar um novo nome", function () {});

When("informar um novo email com 4 caracteres", function () {});

When("confirmar a operação", function () {});

Then(
  "deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!",
  function () {}
);

When("eu informar um novo nome", function () {});

When(
  "informar um novo email com menos de 2 caracteres após o ponto",
  function () {}
);

When("confirmar a operação", function () {});

Then(
  "deve exibir uma mensagem de alerta: Formato de e-mail inválido.",
  function () {}
);

When("eu informar um novo nome", function () {});

When("informar um novo email com 2 caracteres após o ponto", function () {});

When("confirmar a operação", function () {});

Then(
  "deve exibir uma mensagem de alerta: Usuário salvo com sucesso!",
  function () {}
);

When("eu informar um novo nome", function () {});

When("informar um novo email sem a presença de um @", function () {});

When("confirmar a operação", function () {});

Then(
  "deve exibir uma mensagem de alerta: Formato de e-mail inválido.",
  function () {}
);

When("eu informar um novo nome", function () {});

When("informar um novo email nulo", function () {});

When("confirmar a operação", function () {});

Then(
  "deve exibir uma mensagem de alerta: O campo e-mail é obrigatório.",
  function () {}
);

When("eu informar um novo nome", function () {});

When("o campo email estiver vazio", function () {});

When("confirmar a operação", function () {});

Then(
  "deve exibir uma mensagem de alerta: O campo e-mail é obrigatório.",
  function () {}
);

When("eu informar um novo nome", function () {});

When(
  "o campo email possuir espaços em branco no início ou final",
  function () {}
);

When("confirmar a operação", function () {});

Then(
  "deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!",
  function () {}
);
