import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethods extends BasePage {
    static get addCardButton() {
        return cy.get('#mat-expansion-panel-header-0')
    }
    static get nameField() {
        return cy.get('#mat-input-2')
    }
    static get cardNumberField() {
        return cy.get('#mat-input-3')
    }
}