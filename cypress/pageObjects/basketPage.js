import { BasePage } from "../pageObjects/basePage";

export class BasketPage extends BasePage {
    static get checkoutButton() {
        return cy.get('#checkoutButton')
    }
}