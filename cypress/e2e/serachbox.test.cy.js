/// <reference types="cypress" />

describe('Searchbox test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    
    it('Should type into searchbox and submit', () =>{
        cy.get('#searchTerm').type('online {enter}')
    });

    it('Should show search result page', () => {
        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=online')
        cy.get('h2').should('contain.text', 'Search Results:')
    });

});