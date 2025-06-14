describe('Cadastro', () => {
  it('Deve fazer cadastro com sucesso', () => {
    cy.visit('/cadastro')
    cy.get('[type="email"]').type('novoEmail@cadastro.com'),
      cy.get('[type="password"]').type('teste123')
    cy.get('.bg-brand-primary').click()
  })
})
