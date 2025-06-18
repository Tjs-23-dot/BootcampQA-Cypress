
describe('Login Orange HRM', () => {
    it('TC-002 - login invalid password ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
               cy.get('input[name="username"]').should('be.visible')
        cy.get('input[name="username"]').clear().type('Admin').should('have.value','Admin')
        
        cy.xpath('//input[@name="password"]').should('be.visible')
         cy.xpath('//input[@name="password"]').clear().type('123Admin').should('have.value','123Admin')
        
        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()

          cy.get('.oxd-alert-content-text').should('be.visible','Invalid credentials');
})
})
