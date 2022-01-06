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
      .should('be.visible');

      cy.get(`#item${todoIndex} > input`)
        .click();
      cy.get(`#item${todoIndex} > label`)
        .should('not.exist');
    })

  })