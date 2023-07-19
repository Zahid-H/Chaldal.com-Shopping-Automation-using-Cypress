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
        cy.contains('Coca-Cola').click()
        //check the shping card
        cy.wait(2000)
        cy.get("div[class='total']").click()
        cy.wait(2000)

    })
    it('clicking on the catagories Fruits and vegetables ', () => {
        //Selecting fruits and vegtables section

        cy.get('[href="fruits-vegetables"] > .categoryBox > .categoryName').click()

        //Seleting Fruits 
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(2)').click()
        // Adding the first item on the list
        cy.contains('Shagor Kola (Banana Sagor)').click()
        //check the shping card
        cy.wait(2000)
        cy.get("div[class='total']").click()
        cy.wait(2000)

    })
    it('clicking on the catagories Meat and fish ', () => {
        //Selecting fruits and vegtables section

        cy.get('[href="meat-fish"] > .categoryBox > .categoryName').click()

        //Seleting Fruits 
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)').click()
        // Adding the first item on the list
        cy.contains('Chaldal Premium Roast Chicken ± 50 gm').click()
        //check the shping card
        cy.wait(2000)
        cy.get("div[class='total']").click()
        cy.wait(2000)

    })


});