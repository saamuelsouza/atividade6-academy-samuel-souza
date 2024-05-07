import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { faker } = require("@faker-js/faker");
const usuario = {
  name: `${faker.person.firstName()}`,
  email: "",
};

var novoEmail;

beforeEach(() => {
  Given(
    "que acessei a página de usuários no Portal Raro CRUD",
    function () {
      cy.visit(
        "https://rarocrud-frontend-88984f6e4454.herokuapp.com/users"
      );
    }
  );
});