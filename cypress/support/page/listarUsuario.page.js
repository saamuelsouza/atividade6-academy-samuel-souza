export default class ListaUsuarioPage {
    labelEmail = '[data-test="userDataEmail"]';
    labelNome = '[data-test="userDataNome"]';

    linkPaginaNovoUsuario = '[href="/users/novo"]';
    headerUsuarioNaoCadastrado = 'h3';

    buttonProximaPagina = '#paginacaoProximo';
    labelPaginacaoAtual = '#paginacaoAtual';
    buttonVerDetalhes = '#userDataDetalhe';

    clickButtonProximaPagina(){
        cy.get(this.buttonProximaPagina).click();
    }

    visitarUrl() {
        cy.visit(
            "https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
    }

clickButtonVerDetalhes () {
    cy.get(this.buttonVerDetalhes).click();
}


}