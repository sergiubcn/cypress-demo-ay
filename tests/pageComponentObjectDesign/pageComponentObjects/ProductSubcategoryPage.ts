const ElementLocators = {
    productTile: (productId: number) =>
        `[data-testid=productTile-${productId}]`,
}

function navigateToProductDetails(productId: number): void {
    cy.get(ElementLocators.productTile(productId)).click()
}

export const ProductSubCategoryPage = {
    navigateToProductDetails,
}
