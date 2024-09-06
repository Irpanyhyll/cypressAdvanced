/// <reference types="cypress" />

describe('Login/ Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    it('Should try to login with invalid data', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    });

    it('Should display error message', () => {
        cy.visit('http://zero.webappsecurity.com/login.html?login_error=true')
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });

    it('Should login and logout to application with valid data', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()

            // Assert that user is logged in
            cy.get('h2').should('contain.text', 'Cash Accounts')

            // Logout process
            cy.contains(username).click() // Click on the username to reveal the logout option
            cy.get('#logout_link').click() // Click the logout link
            
            // Assert that user is logged out
            cy.url().should('include', 'index.html') 
            cy.get('#signin_button').should('be.visible') 
        })
    });
});
