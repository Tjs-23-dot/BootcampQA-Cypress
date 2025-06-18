
describe('Login Orange HRM', () => {
    it('TC-007 - Forgot Password  ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

     cy.contains('Forgot your password?').should('exist','be.visible').click();


    cy.url().should('include', '/requestPasswordResetCode'); 
     
    cy.get('input[name="username"]').should('be.visible')
    cy.get('input[name="username"]').clear().type('Admin').should('have.value','Admin')

    cy.get('button[type="submit"]').should('be.visible', 'contain.text', 'Reset Password')
        cy.get('button[type="submit"]').click()


  cy.contains('Reset Password link sent successfully').should('be.visible');

})
})
