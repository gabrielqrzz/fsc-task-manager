describe('Visualizar tarefa', () => {
  it('Deve visualizar tarefa', () => {
    cy.visit('/home'),
      cy.get('.justify-between.bg-brand-process > .gap-1 > a > svg').click()
  })
})
