
describe('Login Orange HRM', () => {
    it('TC-004 - Login Empty Field  ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.get('input[name="username"]').should('exist')
        cy.get('input[name="username"]').should('exist').and('have.value', '');
        
        cy.xpath('//input[@name="password"]').should('exist')
        cy.xpath('//input[@name="password"]').should('exist').and('have.value', '');

        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()

            cy.get('.oxd-input-field-error-message').should('have.length', 2); 
})
})
