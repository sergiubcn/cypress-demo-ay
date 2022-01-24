const ElementLocators = {
    addToBasketButton: '[data-testid=addToBasketButton]',
    sizeDropdown: '[data-testid=opener]',
    sizeOption: '[data-testid=optionContentLabel]',
}

/**
 * Selects the first available product size
 * and adds the product to the shopping basket.
 * Note: in an ideal solution the test data would be controlled
 * and this would eliminate guesswork.
 */
function selectSizeAndAddToBasket(): void {
    cy.get(ElementLocators.sizeDropdown).click()
    cy.get(ElementLocators.sizeOption).first().click()
    cy.get(ElementLocators.addToBasketButton).click()
}

export const ProductDetailsPage = {
    selectSizeAndAddToBasket,
}
