import loginData from '../../fixtures/loginData.json';
import directoryPage from "../../support/pageObjects/directoryPage";

describe('Pengujian pada Halaman Directory', () => {
        beforeEach(() => {
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messageshttps://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('getDirectory');
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    directoryPage.inputUsername(loginData.validUsername) 
    directoryPage.inputPassword(loginData.validPassword)
    directoryPage.login_btn()
    directoryPage.klikMenuDirectory() 
  })

it('TC-DIR-0001 - Halaman directory valid', () => {
   directoryPage.verifydirectoryPage() 
   
})

it('TC-DIR-0002 - Directory Employee Name Valid ', () => {
    directoryPage.clickSearch();

    cy.intercept('GET', '**/api/v2/directory/employees**').as('getDirectory')
    directoryPage.searchEmployeeName('Vaibhav Dilip Surawase');
    directoryPage.clickSearch();
     cy.wait('@getDirectory')
    directoryPage.verifySearchResult('Vaibhav Dilip Surawase');

}) 

it('TC-DIR-0003 - Directory Job Title', () => {
    cy.intercept('GET', '**/api/v2/directory/employees**').as('getDirectory')
    directoryPage.selectJobTitle(loginData.JobTitle)
    directoryPage.clickSearch()
    cy.wait('@getDirectory')
    directoryPage.verifySearchResult(loginData.JobTitle)
})

it('TC-DIR-0004 - Directory Location Title', () => {
    cy.intercept('GET', '**/api/v2/directory/employees**').as('getDirectory')
    directoryPage.selectLocation(loginData.Location) 
    directoryPage.clickSearch()
    cy.wait('@getDirectory')
    directoryPage.verifySearchResult(loginData.Location)
})

it('TC-DIR-0005 - Directory Employee Name Invalid', () => {
    directoryPage.inputEmployeeNameInvalid()
    directoryPage.clickSearch()


})

})