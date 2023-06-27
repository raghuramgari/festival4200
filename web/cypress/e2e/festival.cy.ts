let festival: string
import pages from "../src/loginPage";
describe('Ea_Testing', () => {
    const Page = new pages();
    beforeEach(() => {
        //validating Url
        cy.visit('/');
        cy.url().should('contain', 'festivals');
    })
    // validates the title 
    it('Web Page Title Validation', () => {
        cy.title().should('eq', 'EaCodingTest');
    })
    //Print the elements which is visble
    it('Printing all the elements', () => {
        Page.printAllElemnts();
    })
    //Find the length of the element
    it('length of the web page', () => {
        Page.lenghts();
    });
});



