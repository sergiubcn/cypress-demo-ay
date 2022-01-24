const ElementLocators = {
    addToBasketFlyoutContainer: '[data-test-id=AddToBasketFlyInContainer]',
    basketLink: 'a[href=/basket]',
    productImage: '[data-test-id=ProductImage]',
} as const

function navigateToBasket(): void {
    cy.get(ElementLocators.addToBasketFlyoutContainer).within(() => {
        cy.get(ElementLocators.basketLink).click()
    })
}

export const BasketFlyout = {
    flyoutContainer: ElementLocators.addToBasketFlyoutContainer,
    productImage: ElementLocators.productImage,
    navigateToBasket,
}
