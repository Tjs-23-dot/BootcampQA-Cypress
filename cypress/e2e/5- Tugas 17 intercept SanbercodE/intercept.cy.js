describe('Login Orange HRM', () => {
      beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('loginRequest');
})
       
        it('TC-001 - login valid', () => {
        cy.get('input[name="username"]').should('be.visible')
        cy.get('input[name="username"]').clear().type('Admin').should('have.value','Admin')
        
        cy.xpath('//input[@name="password"]').should('be.visible')
         cy.xpath('//input[@name="password"]').clear().type('admin123').should('have.value','admin123')
        
        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()

         cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

        cy.url().should('include', '/dashboard');
        cy.get('h6').should('contain.text', 'Dashboard');

})

        it('TC-002 - login invalid password ', () => {
        cy.get('input[name="username"]').should('be.visible')
        cy.get('input[name="username"]').clear().type('Admin').should('have.value','Admin')
        
        cy.xpath('//input[@name="password"]').should('be.visible')
        cy.xpath('//input[@name="password"]').clear().type('123Admin').should('have.value','123Admin')
        
        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()

// cy.wait('@loginRequest').its('response.statusCode').should('eq', 401); pada intercept untuk test case negatif menggunakan website dummy maka cypress tidak bisa menampikan hasilnya dan akan terjadi eror 

        cy.get('.oxd-alert-content-text').should('be.visible','Invalid credentials');
})

    it('TC-003 - Login Invalid Username  ', () => {
        cy.get('input[name="username"]').should('be.visible')
        cy.get('input[name="username"]').clear().type('adaadmin').should('have.value','adaadmin')
        
        cy.xpath('//input[@name="password"]').should('be.visible')
        cy.xpath('//input[@name="password"]').clear().type('admin123').should('have.value','admin123')
        
        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()

// cy.wait('@loginRequest').its('response.statusCode').should('eq', 401); pada intercept untuk test case negatif menggunakan website dummy maka cypress tidak bisa menampikan hasilnya dan akan terjadi eror 

        cy.get('.oxd-alert-content-text').should('be.visible','Invalid credentials');
})

    it('TC-004 - Login Empty Field  ', () => {
        
        cy.get('input[name="username"]').should('exist')
        cy.get('input[name="username"]').should('exist').and('have.value', '');
        
        cy.xpath('//input[@name="password"]').should('exist')
        cy.xpath('//input[@name="password"]').should('exist').and('have.value', '');

        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()

            cy.get('.oxd-input-field-error-message').should('have.length', 2); 
})


    it('TC-005 - Login Invalid Characters ', () => {

        cy.get('input[name="username"]').should('exist')
        cy.get('input[name="username"]').clear().type('@...').should('have.value', '@...')
        
        cy.xpath('//input[@name="password"]').should('exist')
         cy.xpath('//input[@name="password"]').clear().type('!.....').should('have.value','!.....')
        
        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()

          cy.get('.oxd-alert-content-text').should('be.visible','Invalid credentials');
})

    it('TC-006 - Login Button Visibility', () => {
     
    cy.get('button[type="submit"]').should('exist').and('be.visible','not.be.disabled','contain.text', 'Login');

    cy.get('button[type="submit"]').click();
   
    cy.url().should('include', '/auth/login');
    
})

    it('TC-007 - Forgot Password  ', () => {
       
    cy.contains('Forgot your password?').should('exist','be.visible').click();

    cy.url().should('include', '/requestPasswordResetCode'); 
     
    cy.get('input[name="username"]').should('be.visible')
    cy.get('input[name="username"]').clear().type('Admin').should('have.value','Admin')

    cy.get('button[type="submit"]').should('be.visible', 'contain.text', 'Reset Password')
    cy.get('button[type="submit"]').click()


  cy.contains('Reset Password link sent successfully').should('be.visible');



})

    })