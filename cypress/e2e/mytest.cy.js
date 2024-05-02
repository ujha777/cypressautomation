/// <reference types="cypress" />

describe('My First Test', () => {
    it('Does not do much!', () => {
     
      cy.visit("https://docs.cypress.io/examples/applications#Kitchen-Sink")
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .group').click
    })
  })
  describe('My First Test', () => {
    it('clicking "type" navigates to a new url', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
    })
  })