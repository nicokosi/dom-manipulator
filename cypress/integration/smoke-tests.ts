describe('Smoke tests', () => {

  it('Open a todo detail then close it', () => {
    cy.visit('http://localhost:3000');
    const todoIndex = 1;
    cy.get(`#item${todoIndex} > label`)
      .click();

    cy.get(`#detail${todoIndex}`)
      .should('be.visible');

    cy.screenshot();

    cy.get(`#detail${todoIndex}`)
      .click()
      .should('not.be.visible');
  })

  it('Checkbox hides an item', () => {
    cy.visit('http://localhost:3000');
    const todoIndex = 1;
    cy.get(`#item${todoIndex} > label`)
      .as("item1")
      .should('be.visible')
      .invoke('text')
      .then((label) => {
        cy.get('@item1')
          .should('have.text', label);

        cy.get("@item1")
          .click();

        cy.get('@item1')
          .should('not.have.text', label);
      });
    })

    it('Check that DOM can be manipulated 😇', () => {
      cy.visit('http://localhost:3000');
      document.body.remove()
      cy.get('body', { timeout: 10000 })
        .should('have.length', 1)
    })

})