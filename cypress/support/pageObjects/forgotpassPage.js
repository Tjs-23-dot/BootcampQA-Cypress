import loginData from '../../fixtures/loginData.json';

class forgotpassPage {
    visit () {
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}

    clikforgotpassword() {
      cy.contains('Forgot your password?').should('be.visible').click()
}
    inputUsername(username) {
      cy.get('input[name="username"]').should('be.visible').clear().type(username).should('have.value', username)
}
   clickbtnresetpassword() {
      cy.contains('button', 'Reset Password').should('be.visible').click()
}
    verifySuccessMessage() {
      cy.contains('Reset Password link sent successfully').should('be.visible')
}
}


export default new forgotpassPage()
