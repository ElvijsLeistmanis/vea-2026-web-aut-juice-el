import { BasePage } from "../pageObjects/basePage";

export class OrderSummaryPage extends BasePage {
    static get orderButton() {
        return cy.get('#checkoutButton')
    }
}