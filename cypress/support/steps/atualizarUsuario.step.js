import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { faker } = require("@faker-js/faker");
const usuario = {
  name: `${faker.person.firstName()} teste`,
  email: "",
};

var novoEmail;

beforeEach(() => {
  Given("que eu acesse a lista de usuários do portal Raro CRUD", function () {
    cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
  });
});

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
  cy.get('[type="button"] > .sc-dAlyuH').click();
});

When("editar o email do usuário", function () {
  novoEmail = faker.internet.email();
  cy.get("#userEmail").clear().type(novoEmail, { delay: 0 });
});

When("incluir um novo nome", function () {
  cy.get("#userName").clear().type(usuario.name, { delay: 0 });
});

When("salvar as alterações", function () {
  cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deverá retornar uma mensagem: Informações atualizadas com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Informações atualizadas com sucesso!")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
  cy.get('[type="button"] > .sc-dAlyuH').click();
});

When("selecionar a opção salvar", function () {
  cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deverá retornar uma mensagem: Informações atualizadas com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Informações atualizadas com sucesso!")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When(
  "selecionar a opção editar incluindo um nome com mais de 100 caracteres",
  function () {
    cy.get('[type="button"] > .sc-dAlyuH').type(`${faker.string.alpha(101)}`, {
      delay: 0,
    });
  }
);

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#userEmail").clear().type(novoEmail, { delay: 0 });
});

When("salvar as alterações", function () {
  cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de alerta: Informe no máximo 100 caracteres para o nome",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Informe no máximo 100 caracteres para o nome")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
  cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#userEmail").clear().type(novoEmail, { delay: 0 });
});

When("informar um novo nome com 100 caracteres", function () {
  cy.get("#userName")
    .clear()
    .type(`${faker.string.alpha(100)}`, {
      delay: 0,
    });
});

When("salvar as alterações", function () {
  cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Informações atualizadas com sucesso!")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
  cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#userEmail").clear().type(novoEmail, { delay: 0 });
});

When("incluir um novo nome com menos de 4 caracteres", function () {
  cy.get("#userName")
    .clear()
    .type(`${faker.string.alpha(3)}`, {
      delay: 0,
    });
});

When("salvar as alterações", function () {
  cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de alerta: Informe pelo menos 4 letras para o nome",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Informe pelo menos 4 letras para o nome.")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
  cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#userEmail").clear().type(novoEmail, { delay: 0 });
});

When("incluir um novo nome com 4 caracteres", function () {
  cy.get("#userName")
    .clear()
    .type(`${faker.string.alpha(4)}`, {
      delay: 0,
    });
});

When("salvar as alterações", function () {
  cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Informações atualizadas com sucesso!")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
  cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#userEmail").clear().type(novoEmail, { delay: 0 });
});

When("incluir um novo nome com caracteres numéricos", function () {
  cy.get("#userName").clear().type("12345", {
    delay: 0,
  });
});

When("salvar as alterações", function () {
  cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de alerta: Formato do nome é inválido.",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Formato do nome é inválido.")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
  cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#userEmail").clear().type(novoEmail, { delay: 0 });
});

When("incluir um novo nome com caracteres alfanuméricos", function () {
  cy.get("#userName").clear().type("a1b2c3d4e5", {
    delay: 0,
  });
});

When("salvar as alterações", function () {
  cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de alerta: Formato do nome é inválido.",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Formato do nome é inválido.")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
  cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#userEmail").clear().type(novoEmail, { delay: 0 });
});

When("incluir um novo nome com caracteres especiais", function () {
  cy.get("#userName").clear().type("#$%¨&*@#&", {
    delay: 0,
  });
});

When("salvar as alterações", function () {
    cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de alerta: Formato do nome é inválido.",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Formato do nome é inválido.")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
  cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("informar um novo email", function () {
  novoEmail = faker.internet.email();
  cy.get("#userEmail").clear().type(novoEmail, { delay: 0 });
});

When(
  "incluir um novo nome com caracteres comuns e especiais juntos",
  function () {
    cy.get("#userName").clear().type("a#b$c%d¨e&f*g@h#i&j", {
      delay: 0,
    });
  }
);

When("salvar as alterações", function () {
    cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de alerta: Formato do nome é inválido.",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Formato do nome é inválido.")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
    cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("informar um novo email", function () {
    novoEmail = faker.internet.email();
    cy.get("#userEmail").clear().type(novoEmail, { delay: 0 });
});

When("deixar o campo nome vazio", function () {
    cy.get("#userName").clear().type(" ");
});

When("salvar as alterações", function () {
    cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de alerta: Informe pelo menos 4 letras para o nome.",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Informe pelo menos 4 letras para o nome.")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
    cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("informar um novo email sem a presença de um @", function () {
    cy.get("#userEmail").clear().type("faltaarroba.com", { delay: 0 });
});

When("incluir um novo nome", function () {
    cy.get("#name").type(usuario.name, { delay:0 });
});

When("salvar as alterações", function () {
    cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de alerta: Formato de e-mail inválido.",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Formato de e-mail inválido")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
    cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("informar um novo email com mais de 60 caracteres", function () {
    cy.get("#userEmail").clear().type(
        `${faker.string.alpha(25)}@${faker.string.alpha(31)}.com`,
        { delay: 0 }
      );
});

When("incluir um novo nome", function () {
    cy.get("#name").type(usuario.name, { delay:0 });
});

When("salvar as alterações", function () {
    cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deverá exibir mensagem de alerta: Informe no máximo 60 caracteres para o e-mail",
  function () {
    cy.get(".sc-cPiKLX")
      .contains("Informe no máximo 60 caracteres para o e-mail")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
    cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("informar um novo email com 60 caracteres", function () {
    cy.get("#userEmail").clear().type(
        `${faker.string.alpha(25)}@${faker.string.alpha(30)}.com`,
        { delay: 0 }
      );
});

When("Incluir um novo nome", function () {
    cy.get("#userName").type(usuario.name, { delay:0 });
});

When("salvar as alterações", function () {
    cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Informações atualizadas com sucesso!")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
    cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("informar um novo email com menos de 4 caracteres", function () {
    cy.get("#userEmail").clear().type("abc", { delay: 0 });
});

When("Incluir um novo nome", function () {
    cy.get("#userName").type(usuario.name, { delay:0 });
});

When("salvar as alterações", function () {
    cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de alerta: Informe pelo menos 4 caracteres para o e-mail.",
  function () {
    cy.get('.sc-cPiKLX')
      .contains("Informe pelo menos 4 caracteres para o e-mail.")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When(
  "selecionar a opção editar",
  function () {
    cy.get('[type="button"] > .sc-dAlyuH').type();
  }
);

When("um novo email", function () {
    novoEmail = faker.internet.email();
  cy.get("#userEmail").clear().type(novoEmail, { delay: 0 });
});

When("incluir um novo nome com espaçamentos", function () {
    cy.get("#userName").type('    Nome Teste    ', { delay:0 });
});

When("salvar as alterações", function () {
    cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Informações atualizadas com sucesso!")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
    cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("informar um novo email com mais de 4 caracteres", function () {
    cy.get("#userEmail").clear().type( `${faker.string.alpha(1)}@${faker.string.alpha(1)}.cd`,
    { delay: 0 });
});

When("incluir um novo nome", function () {
    cy.get("#userName").type(usuario.name, { delay:0 });
});

When("salvar as alterações", function () {
    cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de sucesso: Usuário salvo com sucesso!",
  function () {
    cy.get(".go3958317564")
      .contains("Informações atualizadas com sucesso!")
      .should("be.visible");
  }
);

When("eu selecionar a opção ver detalhes", function () {
  cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
});

When("selecionar a opção editar", function () {
    cy.get('[type="button"] > .sc-dAlyuH').type();
});

When("o campo email estiver vazio", function () {
    cy.get("#userEmail").clear().type(" ");
});

When("Incluir um novo nome", function () {
    cy.get("#userName").type(usuario.name, { delay:0 });
});

When("salvar as alterações", function () {
    cy.get(".dGvNqp > .sc-dAlyuH").click();
});

Then(
  "deve exibir uma mensagem de alerta: Informe pelo menos 4 caracteres para o e-mail.",
  function () {
    cy.get('.sc-cPiKLX')
      .contains("Informe pelo menos 4 caracteres para o e-mail.")
      .should("be.visible");
  }
);