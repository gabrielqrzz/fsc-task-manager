describe('Deleção de tarefa', () => {
  it('Tarefa deve ser deletada com sucesso', () => {
    cy.visit('/tasks'),
      cy
        .get(
          ':nth-child(2) > :nth-child(2) > .gap-1 > .flex > .text-brand-text-gray'
        )
        .click()
  })
})
