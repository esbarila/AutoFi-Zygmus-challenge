describe('Cypress interaction with Tutorialspoint', () => {
    beforeEach(() => {
        cy.visit('https://www.tutorialspoint.com/html/html_iframes.htm');
        //cy.goto('/');
    })

    it('Performs tasks and logs results', () =>{
        cy.contains('HTML - Iframes').click();
    })
})