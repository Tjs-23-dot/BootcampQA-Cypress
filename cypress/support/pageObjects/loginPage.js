import loginData from '../../fixtures/loginData.json';

class loginPage {
    visit () {
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

}
    inputUsername(username){
 cy.get('input[name="username"]').should('be.visible').clear().type(username).should('have.value', username)

    }

  inputPassword(password){
    cy.xpath('//input[@name="password"]').should('be.visible').clear().type(password).should('have.value', password)
}

  login_btn(){
    cy.get('button[type="submit"]').should('be.visible').click()
}
 
  verifylogin(){
    cy.url().should('include', '/dashboard');
    cy.get('h6').should('contain.text', 'Dashboard')
}

  verifyinvaliduser() {
  cy.get('.oxd-alert-content-text', { timeout: 10000 }).should('be.visible').and('contain', 'Invalid credentials')
}

    verifyinvalidpass(){
    cy.get('.oxd-alert-content-text').should('be.visible','Invalid credentials')
}
    verifyinvalalidcharcters(){
    cy.get('.oxd-alert-content-text').should('be.visible','Invalid credentials')
} 
    verifyfieldkosong(){
    cy.get('.oxd-input-field-error-message').should('have.length', 2) 
}
    verifybuttonvasibility(){
    cy.url().should('include', '/auth/login')
}
    verifyforgetpass(){
      cy.contains('Forgot your password?').should('be.visible').click()
      cy.get('input[name="username"]').should('be.visible').clear().type(loginData.forgotUsername)
      cy.contains('button', 'Reset Password').should('be.visible').click()
      cy.contains('Reset Password link sent successfully').should('be.visible')
}
}

export default new loginPage()
