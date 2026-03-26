import { BasketPage } from '../pageObjects/basketPage.js';
import { DeliveryMethodPage } from '../pageObjects/deliveryMethodPage.js';
import { HomePage } from '../pageObjects/homePage.js'
import { LoginPage } from '../pageObjects/loginPage.js';
import { OrderCompletionPage } from '../pageObjects/orderCompletionPage.js';
import { OrderSummaryPage } from '../pageObjects/orderSummaryPage.js';
import { PaymentOptionsPage } from '../pageObjects/paymentOptionsPage.js';
import { SelectAddressPage } from '../pageObjects/selectAddressPage.js';
import { RegistrationPage } from '../pageObjects/userRegistrationPage.js';

describe('Juice-shop scenarios', () => {
  context('Without auto login', () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it('Login', () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type('demo');
      // Set password value to "demo"
      LoginPage.passwordField.type('demo');
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should('contain.text', 'demo');
    });

    it('Registration', () => {
      // Click Account button
      HomePage.accountButton.click();

      // Login button
      HomePage.loginButton.click();

      // Click "Not yet a customer?"
      LoginPage.notYetACustomerLink.click();

      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      const randomNumber = Math.floor(Math.random() * 10000);
      const email = `email_${randomNumber}@gmail.com`;
      RegistrationPage.emailField.type(email);

      // Fill in password field and repeat password field with same password
      const password = 'password123';
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password)

      // Click on Security Question menu
      // Select  "Name of your favorite pet?"
      // Fill in answer
      RegistrationPage.securityQuestionDropdown.click();
      RegistrationPage.securityQuestionOptions.contains('Name of your favorite pet?').click();
      RegistrationPage.answerField.type('Golden Labrador');

      // Click Register button
      RegistrationPage.registerButton.click();

      // Set email value to previously created email
      LoginPage.emailField.type(email)
      // Set password value to previously used password value
      LoginPage.passwordField.type(password)
      // Click login button
      LoginPage.loginButton.click()
      // Click Account button
      HomePage.accountButton.click()
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should('contain.text', email)
    });
  });

  context('With auto login', () => {
    beforeEach(() => {
      cy.login('demo', 'demo');
      HomePage.visit();
    });

    it('Search and validate Lemon', () => {
      // Click on search icon
      HomePage.searchIcon.click();

      // Search for Lemon
      HomePage.searchField.type('lemon{enter}');
      
      // Select a product card - Lemon Juice (500ml)
      HomePage.productNames.contains('Lemon Juice (500ml)');

      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productNames.click();
      HomePage.productBoxInfo.should('contain.text', 'Sour but full of vitamins.')
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it('Search 500ml and validate Lemon', () => {
    
    // Click on search icon
    // Search for 500ml
    // Select a product card - Lemon Juice (500ml)
    // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.searchIcon.click();
      HomePage.searchField.type('500ml{enter}');
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      HomePage.productBoxInfo.should('contain.text', 'Sour but full of vitamins.');
    });

    // Create scenario - Search 500ml and validate cards
    it('Search 500ml and validate cards', () => {

    // Click on search icon
    HomePage.searchIcon.click();
    // Search for 500ml
    HomePage.searchField.type('500ml{enter}');
    // Select a product card - Eggfruit Juice (500ml)
    HomePage.productNames.contains('Eggfruit Juice (500ml)').click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.productBoxInfo.should('contain.text', 'Now with even more exotic flavour.');
    // Close the card
    HomePage.closeButton.click();
    // Select a product card - Lemon Juice (500ml)
    HomePage.productNames.contains('Lemon Juice (500ml)').click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.productBoxInfo.should('contain.text', 'Sour but full of vitamins.');
    // Close the card
    HomePage.closeButton.click();
    // Select a product card - Strawberry Juice (500ml)
    HomePage.productNames.contains('Strawberry Juice (500ml)').click();
    // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.productBoxInfo.should('contain.text', 'Sweet & tasty!');
    });
    
    // Create scenario - Read a review
    it('Read a review', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for King
      HomePage.searchField.type('King{enter}');
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productNames.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewDropdown.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.reviewList.should('contain.text', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!')
    });
    
    // Create scenario - Add a review
    it('Add a review', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Raspberry
      HomePage.searchField.type('Raspberry{enter}');
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productNames.contains('Raspberry Juice (1000ml)').click();
      // Type in review - "Tastes like metal"
      HomePage.reviewField.click().type('Tastes like metal');
      // Click Submit
      HomePage.submitReviewButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewDropdown.click();
      // Validate review -  "Tastes like metal"
      HomePage.reviewList.should('contain.text', 'Tastes like metal')
    });
    
    // Create scenario - Validate product card amount
    it('Validate product card amount', () => {
      // Validate that the default amount of cards is 12
      HomePage.allProductsList.its('length').should('eq', 12)
      // Change items per page (at the bottom of page) to 24
      HomePage.itemsPerPageDropdown.click()
      HomePage.itemsPerPageList.contains(24).click();
      // Validate that the amount of cards is 24
      HomePage.allProductsList.its('length').should('eq', 24)
      // Change items per page (at the bottom of page) to 36
      HomePage.itemsPerPageDropdown.click()
      HomePage.itemsPerPageList.contains(36).click();
      // Validate that the amount of cards is 36
      HomePage.allProductsList.its('length').should('eq', 36)
    });
    
    // Create scenario - Buy Girlie T-shirt
    it.only('Buy Girlie T-shirt', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Girlie
      HomePage.searchField.type('Girlie{enter}');
      // Add to basket "Girlie"
      HomePage.purchaseButton.click();
      // Click on "Your Basket" button
      HomePage.basketButton.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click()
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.selectAddressButton.contains("United Fakedom").parent().find('[class="mdc-radio"]').click();
      // Click Continue button
      SelectAddressPage.continueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryButton.contains("Standard Delivery").parent().find('[class="mdc-radio"]').click();
      // Click Continue button
      DeliveryMethodPage.continueButton.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.selectCardButton.contains("5678").parent().find('[class="mdc-radio"]').click();
      // Click Continue button
      PaymentOptionsPage.continueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.orderButton.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.orderCompleted.should('contain.text', "Thank you for your purchase!")
    })
    

    // Create scenario - Add address
    // Click on Account
    // Click on Orders & Payment
    // Click on My saved addresses
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    // Click Submit button
    // Validate that previously added address is visible

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list

  });
});
