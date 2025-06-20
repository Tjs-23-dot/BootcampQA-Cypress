describe('NEGATIVE - Login Reqres.in', () => {
  it('Login gagal tanpa password', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      failOnStatusCode: false,
    body: {
        email:"eve.holt@reqres.in"
      },
    headers : {
      'Content-Type': 'application/json'
    }
    }).then((response) => {
      expect(response.status).to.eq(401)
        expect(response.body).to.have.property('error', 'Missing API Key')

    });
  });
});
