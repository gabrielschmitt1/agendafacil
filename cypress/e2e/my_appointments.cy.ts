describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.prompt([
      "Click in Novo button",
      "Enter nome do cliente 'gabrielschmitt'",
    ])
  })
})