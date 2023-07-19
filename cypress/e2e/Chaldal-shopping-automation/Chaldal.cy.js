/// <reference types="cypress" />

describe('Online Chaldal automation shopping', () => {
    beforeEach(() => {
        cy.visit('https://chaldal.com/')
    })

    it('clicking on the catagories soft drinks and select a product', () => {
        //Selecting beverages section
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > section:nth-child(1) > div:nth-child(2) > a:nth-child(4) > div:nth-child(1) > div:nth-child(1)').click()
        //Seleting soft Drinks 
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(2)').click()
        // Adding the  item on the list
        cy.contains('Coca-Cola').click()
        //check the shping card
        cy.wait(2000)
        cy.get("div[class='total']").click()
        cy.wait(2000)

    })
    it('clicking on the catagories Fruits and vegetables select a product', () => {
        //Selecting fruits and vegtables section

        cy.get('[href="fruits-vegetables"] > .categoryBox > .categoryName').click()

        //Seleting Fruits 
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(2)').click()
        // Adding the  item on the list
        cy.contains('Shagor Kola').click()
        //check the shping card
        cy.wait(2000)
        cy.get("div[class='total']").click()
        cy.wait(2000)

    })
    it('clicking on the catagories Meat and fish select a product', () => {
        //Selecting Meat and fish section

        cy.get('[href="meat-fish"] > .categoryBox > .categoryName').click()

        //Seleting chicken
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)').click()
        // Adding the  item on the list
        cy.contains('Chaldal Premium Roast Chicken ± 50 gm').click()
        //check the shping card
        cy.wait(2000)
        cy.get("div[class='total']").click()
        cy.wait(2000)

    })
    it('clicking on the catagories Cooking and select a product', () => {
        //Selecting spices section

        cy.get('[href="cooking"] > .categoryBox').click()

        //Seleting spices
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)').click()
        // Adding the item on the list
        cy.contains('Radhuni Chilli (Morich) Powder').click()
        //check the shping card
        cy.wait(2000)
        cy.get("div[class='total']").click()
        cy.wait(2000)

    })


});