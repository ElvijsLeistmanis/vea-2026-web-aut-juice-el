import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
    static get selectCardButton() {
        return cy.get('mat-row');
    }

    static get continueButton() {
        return cy.get('button[aria-label="Proceed to review"]')
    }
}