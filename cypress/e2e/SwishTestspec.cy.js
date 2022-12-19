describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.swish.nu/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.topbar-mobile').click();
    cy.get('.icon > :nth-child(3)').click();
    cy.get('.topbar-mobile > .primary-menu > :nth-child(2) > .menu-item').click();
    cy.get('.topbar-mobile > .primary-menu > :nth-child(2) > .dropdown > :nth-child(1) > .navbar-link').click();
    cy.get('.hidden-mobile > .items > [href="/use-case/business-app"] > .card > .footer > .page-link').click();
    cy.get('.content > .button').click();
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('SwishTest02', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.swish.nu/use-case/business-app');
    /* ==== End Cypress Studio ==== */
  });
})