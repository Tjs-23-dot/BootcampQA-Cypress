
describe('Login Orange HRM', () => {
    it('TC-003 - Login Invalid Username  ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
               cy.get('input[name="username"]').should('be.visible')
        cy.get('input[name="username"]').clear().type('adaadmin').should('have.value','adaadmin')
        
        cy.xpath('//input[@name="password"]').should('be.visible')
         cy.xpath('//input[@name="password"]').clear().type('admin123').should('have.value','admin123')
        
        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()

          cy.get('.oxd-alert-content-text').should('be.visible','Invalid credentials');
})
})
