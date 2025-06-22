import forgotpassPage from '../../support/pageObjects/forgotpassPage';
import loginData from '../../fixtures/loginData.json';

describe('Fungsionalitas - Forgot Password', () => {
        beforeEach(() => {
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('resetRequest');
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            forgotpassPage.visit();
        })
it('TC-FP-001 - Forgot Password valid', () => {
        forgotpassPage.visit()
        forgotpassPage.clikforgotpassword()
        forgotpassPage.inputUsername(loginData.forgotUsername)
        forgotpassPage.clickbtnresetpassword()
        cy.wait('@resetRequest')
        forgotpassPage.verifySuccessMessage()
})
it('TC-FP-002 - Forgot Password invalid', () => { 
        forgotpassPage.visit()
        forgotpassPage.clikforgotpassword()
        forgotpassPage.inputUsername(loginData.forgotinvaliduser)
        forgotpassPage.clickbtnresetpassword()
        forgotpassPage.verifySuccessMessage() // Karena dummy site, tetap tampil sukses
        // Jika site real: bisa gunakan verifyInvalidMessage()
    // forgotpassPage.verifyInvalidMessage();
})
it('TC-FP-003 - Forgot Password kosong', () => { 
        forgotpassPage.visit()
        forgotpassPage.clikforgotpassword()
        forgotpassPage.clickbtnresetpassword()
})

})
