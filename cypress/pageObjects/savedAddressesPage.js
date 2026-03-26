import { BasePage } from "./basePage";

export class SavedAddressesPage extends BasePage {
    static get addAddressButton() {
        return cy.get('button[aria-label="Add a new address"]');
    }

    static get savedAddressList() {
        return cy.get("mat-card")
    }
}