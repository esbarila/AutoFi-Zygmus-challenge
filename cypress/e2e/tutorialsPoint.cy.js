describe('Cypress interaction with Tutorialspoint', () => {
    beforeEach(() => {
        cy.visit('/html/html_iframes.htm');
    })

    it('Performs tasks and logs results', () =>{
        cy.contains('HTML - Iframes').click();
    })
})