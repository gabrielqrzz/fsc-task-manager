describe('Criação de tarefa', () => {
  it('Tarefa deve ser criada com sucesso', () => {
    cy.visit('tasks'), cy.get('.gap-3 > .flex').click()
    cy
      .get('#title')
      .type('Teste de criação de tarefa em algum periodo específico'),
      cy.get('#time').select('afternoon'),
      cy.get('#description').type('Testando descrição da criação de tarefa')
    cy.contains('Salvar').click()
  })
})
