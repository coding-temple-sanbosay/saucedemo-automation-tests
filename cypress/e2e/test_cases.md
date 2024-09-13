# Test Cases for SauceDemo Website

---

## **Test Case 1: Valid Login**

- **Title:** TC01 - Valid Login
- **Description:** Verify that a standard user can log in with valid credentials.
- **Preconditions:** User is on the saucedemo.com login page.
- **Test Steps:**
  1. Enter username: `standard_user`
  2. Enter password: `secret_sauce`
  3. Click the "Login" button
- **Expected Result:** User is successfully logged in and navigated to the products page.

---

## **Test Case 2: Invalid Login (Wrong Password)**

- **Title:** TC02 - Invalid Login with Wrong Password
- **Description:** Verify that the user cannot log in with an incorrect password.
- **Preconditions:** User is on the saucedemo.com login page.
- **Test Steps:**
  1. Enter username: `standard_user`
  2. Enter password: `wrong_password`
  3. Click the "Login" button
- **Expected Result:** An error message is displayed: "Epic sadface: Username and password do not match any user in this service."

---

## **Test Case 3: Navigate Through Product Pages**

- **Title:** TC03 - Navigate Through Product Pages
- **Description:** Verify that the user can navigate through different product pages.
- **Preconditions:** User is logged in as `standard_user`.
- **Test Steps:**
  1. Click on the first product item.
  2. Click the back button to return to the products list.
- **Expected Result:** User can view product details and navigate back to the products list.

---

## **Test Case 4: Add Items to Cart**

- **Title:** TC04 - Add Items to Cart
- **Description:** Verify that the user can add items to the shopping cart.
- **Preconditions:** User is logged in as `standard_user`.
- **Test Steps:**
  1. Click "Add to cart" on the first product.
  2. Click "Add to cart" on the second product.
  3. Click on the shopping cart icon.
- **Expected Result:** Both items are displayed in the shopping cart.

---

## **Test Case 5: Checkout Process**

- **Title:** TC05 - Checkout Process
- **Description:** Verify that the user can complete the checkout process.
- **Preconditions:** User has items in the shopping cart.
- **Test Steps:**
  1. Click on the shopping cart icon.
  2. Click the "Checkout" button.
  3. Enter first name: `John`
  4. Enter last name: `Doe`
  5. Enter postal code: `12345`
  6. Click "Continue"
  7. Click "Finish"
- **Expected Result:** The order is completed, and a confirmation message is displayed: "THANK YOU FOR YOUR ORDER"

---