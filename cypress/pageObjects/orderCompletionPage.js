import { BasePage } from "../pageObjects/basePage";

export class OrderCompletionPage extends BasePage {
    static get orderCompleted() {
        return cy.get('mat-card')
    }
}