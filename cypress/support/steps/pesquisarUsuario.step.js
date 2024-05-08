import PesquisarPage from "../page/pesquisar.page";
const paginaPesquisar = new PesquisarPage
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { faker } = require("@faker-js/faker");
const usuario = {
  name: `${faker.person.firstName()}Teste`,
  email: "",
};

var novoEmail;

beforeEach(() => {
  Given(
    "que acessei a página de usuário no Portal Raro",
    function () {
     paginaPesquisar.visitarUrl()
    }
  );
});


When("incluir o nome de um usuário cadastrado", function () {
    cy.get('.sc-gsFSXq').type('Thata Morais').click()
});

When("acionar o recurso ver detalhes ", function () {
    cy.get('#userDataDetalhe').click()
  });

Then("deverá validar as informações do mesmo", function () {
    cy.get('#userName').invoke('val', 'Thata Morais').should('have.value', 'Thata Morais')
  });

  When("incluir o email do usuário", function () {
    cy.get('.sc-gsFSXq').type('thata@morais.com').click()
    
  });
  
  When("acionar o recurso ver detalhes", function () {
    cy.get('#userDataDetalhe').click()
  });

  Then("deverá retornar as informações do mesmo", function () {
    cy.get('#userEmail').invoke('val', 'thata@morais.com').should('have.value', 'thata@morais.com')
    });

  When("eu incluir informações na aba de pesquisa", function () {
    cy.get('.sc-dcJsrY').type(usuario.name)
  });

  Then("deve ser possível limpar os caracteres utilizando o icone de limpeza.", function () {
    cy.get('[class="sc-kAyceB cFrQvb"]').click()
  });

  When("eu buscar um usuário não cadastrado", function () {
    cy.get('.sc-dcJsrY').type('askmsdokdvjnsdk12')
  });

  Then('deve retornar uma mensagem de alerta: "Ops! Não existe nenhum usuário para ser exibido."', function () {
    cy.get('h3').contains('Ops! Não existe nenhum usuário para ser exibido.').should('be.visible')
  });