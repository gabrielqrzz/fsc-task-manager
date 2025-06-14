describe('Login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('/login')
    cy.get('[type="email"]').type('teste@teste.com'),
      cy.get('[type="password"]').type('teste123'),
      cy.get('.bg-brand-primary').click()
    cy.screenshot('teste-de-login')
  })
})
