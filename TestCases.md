# Test case repository - About You web app

## User acceptance tests

### A user can add a product to basket via product details and proceed to checkout

**Prerequisites**

-   The About You web app configured and running on a server;
-   A valid user account;
-   Test/ seed/ default data available in the environment;

**Steps & outcomes**

1. Load the application in a browser - the application loads as expected.
2. Long into a valid shopper account - the user logged into the account.
3. From the Header hover the cursor over/ select(mobile) a category - a submenu expands and shows sub-categories of products.
4. Select a sub-category of products - the sub-category of products page is loaded.
5. Select a product - the product details page is loaded with all the product's information.
6. Select a size and add to basket - the product is marked as added to basket and the number 1 is displayed next to the basket icon in the top right corner of the Header.
7. Select the basket from the Header - the shopping basket page is loaded and the product is displayed there.
8. Select the "Finalize" button in order to proceed to checkout - the checkout flow is started.
9. !!Under normal circumstances we'd have additional steps that would walk through the full checkout flow.
