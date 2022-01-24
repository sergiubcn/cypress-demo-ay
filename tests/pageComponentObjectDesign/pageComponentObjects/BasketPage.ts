const ElementLocators = {
    activeBasketItemKey: '[data-test-id=BasketItem_Active] div',
    proceedToCheckoutButton: '[data-test-id=CheckoutButton]',
    removeItemButton: '[data-test-id=BasketRemoveItem]',
} as const

const basketItemKeyAttribute = 'data-basket-item-key'

function getItemBasketKey(): string {
    return document
        .querySelector(ElementLocators.activeBasketItemKey)
        .getAttribute(basketItemKeyAttribute)
}

function proceedToCheckout(): void {
    cy.get(ElementLocators.proceedToCheckoutButton).click()
}

function removeItemFromBasket(): void {
    cy.get(ElementLocators.removeItemButton).click()
}

export const BasketPage = {
    getItemBasketKey,
    proceedToCheckout,
    removeItemFromBasket,
}
