/// <reference types="cypress" />

describe('Online Chaldal automation shopping', () => {
    beforeEach(() => {
        cy.visit('https://chaldal.com/')
    })
    
        it('clicking on the catagories soft drinks', () => {
            //Selecting beverages section
            cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > section:nth-child(1) > div:nth-child(2) > a:nth-child(4) > div:nth-child(1) > div:nth-child(1)').click()
            //Seleting soft Drinks 
            cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(2)').click()
            // Adding the first item on the list
            cy.contains('Add to bag').click()
            //check the shping card
            cy.get("div[class='total']").click()
        
       })
      
});