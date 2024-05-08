export default class AtualizarPage {
    inputNome = '#userName'
    inputEmail = '#userEmail'
    buttonSalvar = '.dGvNqp > .sc-dAlyuH'
    
    typeNome (nome) {
        cy.get(this.inputNome).type(nome)
    }
    
    typeEmail (email) {
        cy.get(this.inputEmail).type(email)
    }
    
    clickButtonSalvar () {
        cy.get(this.buttonSalvar).click()
    }

    visitarUrl () {
        cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
    }
    
    }