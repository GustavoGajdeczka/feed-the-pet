describe('Testando a aplicação', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  })

  context('verificando as portas', () => {
    it('testando a casa abre', () => {
      cy.get('.container img').click();
      cy.get('.lock').should('have.length', 1)
  
      cy.get('.lock-small').should('have.length', 4);
      cy.get('#lock1').click();
      cy.get('#lock2').click();
      cy.get('#lock3').click();
      cy.get('#lock4').click();
      cy.get('.door-back').click();
      
      cy.get('app-lock').should('have.length', 5);
      cy.get('#lock0').click();
      cy.get('#lock1').click();
      cy.get('#lock3').click();
      cy.get('#lock4').click();
      cy.get('.door-back').click();

      cy.get('#num2').click();
      cy.get('#num8').click();
      cy.get('#num0').click();
      cy.get('#num9').click();
      cy.get('#num1').click();
      cy.get('#num9').click();
      cy.get('#num9').click();
      cy.get('#num8').click();
      cy.get('.door-back').click();

      cy.get('img').click();
    })
  })
})