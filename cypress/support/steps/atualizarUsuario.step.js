import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { faker } = require("@faker-js/faker");
const usuario = {
  name: `${faker.person.firstName()}`,
  email: "",
};

var novoEmail;

beforeEach(() => {
  Given("que eu acesse a lista de usuários do portal Raro CRUD", function () {
    cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
  });
});

When("eu selecionar a opção ver detalhes", function () {});

When("selecionar a opção editar", function () {});

When("editar o nome do usuário", function () {});

When("editar o email do usuário", function () {});

When("salvar as alterações", function () {});

Then("deve retornar uma mensagem: Informações atualizadas com sucesso!", function () {});

When("eu selecionar a opção ver detalhes", function () {});

When("selecionar a opção salvar", function () {});

Then("deverá retornar uma mensagem: Informações atualizadas com sucesso!", function () {});

