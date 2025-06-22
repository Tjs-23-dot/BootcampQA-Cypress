import loginData from '../../fixtures/loginData.json';

class directoryPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  inputUsername(username) {
    cy.get('input[name="username"]').should('be.visible').clear().type(username);
  }

  inputPassword(password) {
    cy.get('input[name="password"]').should('be.visible').clear().type(password);
  }

  login_btn() {
    cy.get('button[type="submit"]').click();
  }

  klikMenuDirectory() {
    cy.contains('Directory').should('be.visible').click();
  }

  verifydirectoryPage() {
    cy.url().should('include', '/directory/viewDirectory');

  }

searchEmployeeName(name = loginData.EmployeeNamevalid) {
    cy.get('input[placeholder="Type for hints..."]').should('be.visible').clear().type(name);

    cy.wait(500); 
    cy.get('.oxd-autocomplete-dropdown > *').each(($el) => {
      if ($el.text().trim().toLowerCase().includes(name.trim().toLowerCase())) {
        cy.wrap($el).click();
        return false;
      }
    });
  }

  inputEmployeeNameInvalid(name = loginData.EmployeeNameInvalid) {
    cy.get('input[placeholder="Type for hints..."]').should('be.visible').clear().type(name).should('have.value', name);
  }

  selectJobTitle(title) {
    cy.get('.oxd-select-text').eq(0).click();
    cy.contains('.oxd-select-option', title).click();
  }

  selectLocation(location) {
    cy.get('.oxd-select-text').eq(1).click();
    cy.contains('.oxd-select-option', location).click();
  }

  clickSearch() {
    cy.get('button[type="submit"]').click();
  }

  verifySearchResult(expectedText) {
  cy.get('.orangehrm-directory-card', { timeout: 10000 })
    .should('exist')
    .then(($cards) => {
      let found = false;
      $cards.each((index, card) => {
        const text = card.innerText.toLowerCase();
        if (text.includes(expectedText.toLowerCase())) {
          found = true;
        }
      });
      expect(found, `Expected to find '${expectedText}' in directory cards`).to.be.true;
    });
  }
  
  verifyNoResult() {
    cy.get('.oxd-table-body', { timeout: 10000 }).should('be.visible').and('contain.text', 'No Records Found');
  }
}

export default new directoryPage();
