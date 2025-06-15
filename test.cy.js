describe('Login Orange HRM', () => {
    it('TC-001 - login valid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
       
        
        cy.get('input[name="username"]').should('be.visible')
        cy.get('input[name="username"]').clear().type('Admin').should('have.value','Admin')
        
        cy.xpath('//input[@name="password"]').should('be.visible')
         cy.xpath('//input[@name="password"]').clear().type('admin123').should('have.value','admin123')
        
        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()

         cy.url().should('include', '/dashboard');
        cy.get('h6').should('contain.text', 'Dashboard');
})
})
