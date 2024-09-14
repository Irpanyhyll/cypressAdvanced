/// <reference types="cypress" />

describe('Navbar Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').should('be.visible').click();
        cy.url().should('include', 'online-banking.html');
        cy.get('h1').should('be.visible');
    });

    it('Should display feedback content', () => {
        cy.visit('http://zero.webappsecurity.com/feedback.html');
        cy.get('#feedback-title').should('be.visible').click();
        cy.url().should('include', 'feedback.html');
        cy.get('h3').should('be.visible');
    });

    it('Should display homepage content', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Zero Bank').should('be.visible').click();
        cy.url().should('include', 'index.html');

    });
});
