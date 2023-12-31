/// <reference types="cypress" />

describe('Online Chaldal automation shopping', () => {
    beforeEach(() => {
        cy.visit('https://chaldal.com/')
    })
    it('|Test case_001| Full process of ordering a product by searching', () => {

        cy.get('.searchBox').first().type('chashi')
        cy.wait(3000)
        cy.contains('Chashi Aromatic Chinigura Rice').click()
        cy.wait(3000)
        cy.get("div[class='total']").click()
        cy.wait(3000)
        cy.contains('Place Order').click()
        cy.wait(3000)
        cy.get('.input > input').type('010101010')
        cy.get("button[class='loginBtn']").click()
        cy.wait(3000)


    });
    it('|Test case_002| clicking on the catagories soft drinks and select a product', () => {
        //Selecting beverages section
        cy.get('[href="beverages"] > .categoryBox > .categoryName').click()
        //Seleting soft Drinks 
        cy.contains('Soft Drinks').click()
        // Adding the  item on the list
        cy.contains('Mountain Dew').click()
        //check the shping card
        cy.wait(2000)
        cy.get("div[class='total']").click()
        cy.wait(2000)

    })
    it('|Test case_003| clicking on the catagories Fruits and vegetables select a product', () => {
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
    it('|Test case_004| clicking on the catagories Meat and fish select a product', () => {
        //Selecting Meat and fish section

        cy.get('[href="meat-fish"] > .categoryBox > .categoryName').click()

        //Seleting chicken
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)').click()
        // Adding the  item on the list
        cy.contains('Chaldal Premium Roast Chicken').click()
        //check the shping card
        cy.wait(2000)
        cy.get("div[class='total']").click()
        cy.wait(2000)

    })
    it('|Test case_005| clicking on the catagories Cooking and select a product', () => {
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
    it('|Test case_006| clicking on the catagories Home ceaning suplies and select a product', () => {
        //Selecting Home cleaning suplies section

        cy.get('[href="cleaning"] > .categoryBox > .categoryName').click()

        //Seleting Toilet cleaners
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3) > div:nth-child(1) > div:nth-child(2)').click()
        // Adding the item on the list
        cy.contains('Harpic Liquid Toilet Cleaner 750 ml & Lizol Citrus Floor Cleaner 500 ml').click()
        //check the shping card
        cy.wait(2000)
        cy.get("div[class='total']").click()
        cy.wait(2000)

    })


});