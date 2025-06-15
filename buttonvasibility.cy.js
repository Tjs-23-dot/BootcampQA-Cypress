describe('Login Orange HRM', () => {
    it('TC-006 - Login Button Visibility', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
       
          cy.get('button[type="submit"]').should('exist').and('be.visible','not.be.disabled','contain.text', 'Login');

    cy.get('button[type="submit"]').click();

   
    cy.url().should('include', '/auth/login');
    })
})