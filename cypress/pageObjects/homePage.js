import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get('#navbarAccount')
  }

  static get loginButton () {
    return cy.get("#navbarLoginButton")
  }

  static get userProfileButton() {
    return cy.get('button[aria-label="Go to user profile"]').find('span');
  }

  static get searchIcon () {
    return cy.get("#searchQuery")
  }

  static get searchField() {
    return cy.get("#searchQuery input")
  }

  static get productNames () {
    return cy.get('[class="mat-grid-tile ng-star-inserted"]').find('[class="info-box"]')
  }

  static get productBoxInfo() {
    return cy.get('mat-dialog-content .details-row');
  }

  static get closeButton() {
    return cy.get('.close-dialog');
  }

  static get reviewDropdown() {
    return cy.get('mat-expansion-panel-header');
  }

  static get reviewList() {
    return cy.get('#cdk-accordion-child-0');
  }
  
  static get reviewField() {
    return cy.get('textarea[aria-label="Text field to review a product"]')
  }

  static get submitReviewButton() {
    return cy.get('#submitButton')
  }

  static get allProductsList() {
    return cy.get('[class="mat-grid-tile ng-star-inserted"]')
  }

  static get itemsPerPageDropdown() {
    return cy.get('[class="mat-mdc-paginator-touch-target"]')
  }

  //I don't think this is the "correct" way to do this but.. if it works, it works.
  static get itemsPerPageList() {
    return cy.get('[class="mat-mdc-paginator-touch-target"]').get('[class="mdc-list-item__primary-text"]')
  }

  static get purchaseButton() {
    return cy.get('[class="mat-grid-tile ng-star-inserted"]').find('button[aria-label="Add to Basket"]')
  }

  static get basketButton() {
    return cy.get('button[aria-label="Show the shopping cart"]')
  }
}
