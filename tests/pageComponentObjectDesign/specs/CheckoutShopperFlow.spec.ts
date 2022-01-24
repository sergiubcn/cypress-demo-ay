import { App } from '../pageComponentObjects/App'
// import { AuthenticationModal } from '../pageComponentObjects/AuthenticationModal';
import { BasketFlyout } from '../pageComponentObjects/BasketFlyout'
import { BasketPage } from '../pageComponentObjects/BasketPage'
import { Header } from '../pageComponentObjects/Header'
import { ProductSubCategoryPage } from '../pageComponentObjects/ProductSubcategoryPage'
import { ProductDetailsPage } from '../pageComponentObjects/ProductDetailsPage'

import { PRODUCT_DATA } from '../../data/productData'
// import { USER_DATA } from '../../data/userData';

describe('Basic shopper flows', () => {
    after(() => {
        // Needed until the test data handler is in place.
        BasketPage.removeItemFromBasket()
    })

    it('should allow the shopper to add product to basket and proceed to checkout', () => {
        App.loadApp()

        // TODO: investigate and fix CORS errors.
        // Header.proceedToAuthentication();
        // AuthenticationModal.logIntoUserAccount(USER_DATA.email, USER_DATA.password);

        Header.navigateToProductCategOrSubcategPage(
            PRODUCT_DATA.category,
            PRODUCT_DATA.subcategory
        )
        ProductSubCategoryPage.navigateToProductDetails(PRODUCT_DATA.productId)
        ProductDetailsPage.selectSizeAndAddToBasket()
        cy.get(BasketFlyout.flyoutContainer).within(() => {
            cy.get(BasketFlyout.productImage).should('be.visible')
        })
        BasketFlyout.navigateToBasket()
        expect(BasketPage.getItemBasketKey()).to.include(PRODUCT_DATA.productId)

        // Temporarily ignored. Uncomment after test data handler is in place.
        // BasketPage.proceedToCheckout();
        // TODO: add the rest of the checkout flow.
    })
})
