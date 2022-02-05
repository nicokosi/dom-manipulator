describe('Smoke tests', () => {

  beforeEach(function () {
    cy.intercept(
      {
        method: 'GET',
        url: 'https://random-words-api.vercel.app/word',
      },
      [{ "word": "fake-random-word" }])
      .as('word')
  })

  it('Show the detail on hover 🔍', () => {
    cy.visit('http://localhost:3000');
    const todoIndex = 1;
    cy.get(`#item${todoIndex} > label`).trigger('mouseover')

    cy.get(`#detail${todoIndex}`)
      .should('be.visible');

    cy.screenshot();
  })

  it('Mark item as completed when clicking on checkbox 🙈', () => {
    cy.visit('http://localhost:3000');
    const todoIndex = 1;
    cy.get(`#item${todoIndex}`)
      .as('item1')
      .should('not.have.class', 'completed');

    cy.get(`#todo-${todoIndex}`)
      .click();

    cy.get('@item1')
      .should('have.class', 'completed');
    })

    it('Check that DOM can be manipulated 😇', () => {
      cy.visit('http://localhost:3000');
      document.body.remove()
      cy.get('body', { timeout: 10000 })
        .should('have.length', 1)
    })

})