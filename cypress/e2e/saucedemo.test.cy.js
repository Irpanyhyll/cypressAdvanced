/// <reference types="cypress" />

describe('Working with inputs', () => {    
    
    it('Succes Login, Checkout and Logout', () => {
        cy.visit('https://www.saucedemo.com/', { timeout: 10000 })
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')
        cy.get('#password').clear() 
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click() 
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').clear()
        cy.get('#first-name').type('irpan')
        cy.get('#last-name').clear()
        cy.get('#last-name').type('yahyal')
        cy.get('#postal-code').clear()
        cy.get('#postal-code').type('46474')
        cy.get('#continue').click()
        cy.get('#finish').click()
        cy.get('#back-to-products').click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
       
    });
    
});