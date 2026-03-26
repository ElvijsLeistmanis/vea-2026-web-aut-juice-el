import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage {
    static get deliveryButton() {
        return cy.get('mat-row')
    }

    static get continueButton() {
        return cy.get('button[aria-label="Proceed to delivery method selection"]')
    }
}