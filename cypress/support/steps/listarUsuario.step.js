import ListaUsuarioPage from "../page/listarUsuario.page";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { faker } = require("@faker-js/faker");
const paginaListaUsuario = new ListaUsuarioPage();
const usuario = {
  name: `${faker.person.firstName()}`,
  email: "",
};

var novoEmail;

beforeEach(() => {
  Given(
    "que eu acesse a página de usuários do portal Raro",
    function () {
      paginaListaUsuario.visitarUrl()
    }
  );
});

When("eu requisitar detalhes de um usuario", function () {
  paginaListaUsuario.clickButtonVerDetalhes()
});

Then("deve retornar as informações do usuário", function () {
  (cy.get('.sc-jXbUNg > :nth-child(3)')).contains('Nome').should('be.visible');
  cy.get('.sc-jXbUNg > :nth-child(5)').contains('E-mail').should('be.visible');
});

When("eu listar um usuário", function () {
  cy.get('.sc-dcJsrY').type('laksjdhfgg');
});

Then("deve exibir a opção Cadastre um novo usuário se não houver nenhum usuário cadastrado", function () {
  cy.get('p').contains('Cadastre um novo usuário').should('be.visible');
});

When("eu selecionar a opção próxima página", function () {
  paginaListaUsuario.clickButtonProximaPagina()
});

Then("deverá conter '2 de' em páginação atual", function () {
  cy.get('#paginacaoAtual').contains('2 de').should('be.visible');
});

When("eu selecionar o botão com a opção 'Próxima página'", function () {
  paginaListaUsuario.clickButtonProximaPagina()
});

Then("deve alterar a 'páginação atual'", function () {
  cy.get('#paginacaoAtual').contains('2 de').should('be.visible');
});

When("eu buscar detalhes de um usuário especifíco", function () {
  paginaListaUsuario.clickButtonVerDetalhes()
});

Then("a opção de editar deverá estar visível", function () {
  cy.get('[type="button"] > .sc-dAlyuH').contains('Editar').should('be.visible');
});

When("eu selecionar a opção excluir", function () {
  cy.get(':nth-child(1) > .sc-feUZmu > [data-test="userDataDelete"]').click()
});

Then("deverá retornar uma mensagem 'Deseja realmente remover este usuário ?'", function () {
  cy.get('[class="sc-dCFHLb lmTxRO"]').contains("Deseja realmente remover este usuário ?").should('be.visible');
});
