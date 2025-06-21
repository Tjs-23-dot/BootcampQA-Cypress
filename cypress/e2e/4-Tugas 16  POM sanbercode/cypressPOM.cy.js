import loginPage from "../../support/pageObjects/loginPage";
import loginData from '../../fixtures/loginData.json';

describe('Fungsionalitas - Login', () => {
        beforeEach(() => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            loginPage.visit();
        })

it('TC-001 - login valid', () => {
        loginPage.visit();
       loginPage.inputUsername(loginData.validUsername); 
       loginPage.inputPassword(loginData.validPassword);
        loginPage.login_btn();
        loginPage.verifylogin();

})
it('TC-002 - login invalid password ', () => {
         loginPage.visit();
        loginPage.inputUsername(loginData.validUsername); 
        loginPage.inputPassword(loginData.invalidPassword);
        loginPage.login_btn();
        loginPage.verifyinvalidpass();
})
it('TC-003 - Login Invalid Username  ', () => {
         loginPage.visit();
        loginPage.inputUsername(loginData.invalidUsername); 
        loginPage.inputPassword(loginData.validPassword);
       loginPage.login_btn();
       loginPage.verifyinvaliduser();
})
    it('TC-004 - Login Empty Field  ', () => {
        loginPage.visit();
        loginPage.login_btn();
        loginPage.verifyfieldkosong();
})
it('TC-005 - Login Invalid Characters ', () => {
        loginPage.inputUsername(loginData.charUsername);
        loginPage.inputPassword(loginData.charPassword);
        loginPage.login_btn();
        loginPage.verifyinvalalidcharcters();
})
it('TC-006 - Login Button Visibility', () => {
        loginPage.visit();
        loginPage.verifybuttonvasibility();

});

it('TC-007 - Forgot Password', () => {
  loginPage.visit();
  loginPage.inputUsername(loginData.charUsername);
  loginPage.verifyforgetpass(); 
});

  

})
