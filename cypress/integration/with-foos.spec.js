describe('with-foos', () => {
  describe('when given a single word', () => {
    beforeEach(() => {
      cy.request('/api/with-foos?words=baz').as('response')
    })

    it('returns a 200 status', () => {
      cy.get('@response').its('status').should('equal', 200)
    })

    it('should be JSON', () => {
      cy.get('@response')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
    })

    it('returns the expected body', () => {
      cy.get('@response').its('body').should('deep.eq', ['foo_baz'])
    })
  })

  describe('when given multiple words', () => {
    beforeEach(() => {
      cy.request('/api/with-foos?words=one,two,three').as('response')
    })

    it('returns the expected body', () => {
      cy.get('@response')
        .its('body')
        .should('deep.eq', ['foo_one', 'foo_two', 'foo_three'])
    })
  })

  describe('when given no words', () => {
    beforeEach(() => {
      cy.request({ failOnStatusCode: false, url: '/api/with-foos' }).as(
        'response',
      )
    })

    it('returns a 400 status', () => {
      cy.get('@response').its('status').should('equal', 400)
    })

    it('returns appropriate error in the body', () => {
      cy.get('@response')
        .its('body')
        .should('deep.eq', { error: 'words is a required argument' })
    })
  })
})
