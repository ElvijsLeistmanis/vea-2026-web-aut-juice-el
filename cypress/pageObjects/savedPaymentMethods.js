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
    static get expiryMonthField() {
        return cy.get('#mat-input-4')
    }
    static get expiryYearField() {
        return cy.get('#mat-input-5')
    }
    static get submitButton() {
        return cy.get('#submitButton')
    }
    static get cardList() {
        return cy.get('mat-card')
    }
}