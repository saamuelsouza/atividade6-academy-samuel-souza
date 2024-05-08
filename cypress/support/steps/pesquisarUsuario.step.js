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
    "que acessei a página de criação de novo usuário no Portal Raro CRUD",
    function () {
     paginaCadastrar.visitarUrl()
    }
  );
});

When("informar o novo nome", function () {
  paginaCadastrar.typeNome(usuario.name)
});