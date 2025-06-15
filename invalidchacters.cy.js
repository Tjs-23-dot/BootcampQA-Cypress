
describe('Login Orange HRM', () => {
    it('TC-005 - Login Invalid Characters ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('input[name="username"]').should('exist')
        cy.get('input[name="username"]').clear().type('@...').should('have.value', '@...')
        
        cy.xpath('//input[@name="password"]').should('exist')
         cy.xpath('//input[@name="password"]').clear().type('!.....').should('have.value','!.....')
        
        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()

          cy.get('.oxd-alert-content-text').should('be.visible','Invalid credentials');
})
})
