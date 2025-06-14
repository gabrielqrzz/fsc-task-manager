describe('Sair da aplicação', () => {
  it('Deve sair da aplicação', () => {
    cy.visit('/home'), cy.get('.p-4 > .flex').click()
  })
})
