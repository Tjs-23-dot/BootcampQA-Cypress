describe('Automation API Reqres.in', () => {
   it('GET List Users',() => {
    cy.request ({
        method : 'GET',
        url : "https://reqres.in/api/users?page=2",
        failOnStatusCode : true,
       Headers : {
        'x-api-key' : 'reqres-free-v1'
       }
    }) .then((Response)=> {
    expect(Response.status).to.eq(200)
    expect(Response.body.data[0]).to.have.property('id')
    })
})
})
describe('Automation API Reqres.in', () => {
  it('POST Create', () => {
    cy.request({
      method: 'POST',
      url: "https://reqres.in/api/users",
      failOnStatusCode : true,
      headers: {
        'Content-Type': 'application/json',
          'x-api-key' : 'reqres-free-v1'
      },
      body: {
        name: 'morpheus',
        job: 'leader'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('createdAt')
    });
  });
});
describe('Automation API Reqres.in', () => {
  it('PUT Update', () => {
    cy.request({
      method: 'PUT',
      url: "https://reqres.in/api/users/2",
      failOnStatusCode : true,
      headers: {
        'Content-Type': 'application/json',
          'x-api-key' : 'reqres-free-v1'
      },
      body: {
        name: 'morpheus',
        "job": 'zion resident'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
     expect(response.body).to.have.property('name', 'morpheus')
      expect(response.body).to.have.property('job', 'zion resident')
      expect(response.body).to.have.property('updatedAt')
    });
  });
});
describe('Automation API Reqres.in', () => {
  it.only('DELETE', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
      failOnStatusCode: true,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1' 
      }
    }).then((response) => { 
      console.log('Status:', response.status)
      console.log('Body:', response.body)
      expect(response.status).to.eq(204)
    })
  })
})


