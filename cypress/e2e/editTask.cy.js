describe('template spec', () => {
  it('passes', () => {
    cy.visit('/tasks'),
      cy.get('.justify-between.bg-brand-primary > .gap-1 > a > svg').click()
    cy.get('#title').clear(),
      cy.get('#title').type('Testando edição de tarefa'),
      cy.get('#time').select('evening'),
      cy.get('#description').clear(),
      cy.get('#description').type('Editando tarefa e trocando seu período'),
      cy.contains('Salvar').click()
  })
})
