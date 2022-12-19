describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.url().should('include','commands/actions')

    cy.get('.action-email').type('fake@email.com')

    cy.get('.action-email').should('have.value', 'fake@email.com')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email1').clear();
    cy.get('#email1').type('fake@email.com');
    cy.get('#focus > a').click();
    cy.get('[href="/guides/core-concepts/introduction-to-cypress#Timeouts"] > .svg-inline--fa > path').click();
    cy.get('.main-content-article').click();
    /* ==== End Cypress Studio ==== */
  })
})