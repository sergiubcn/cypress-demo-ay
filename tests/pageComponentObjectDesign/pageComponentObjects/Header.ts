const ElementLocators = {
    accountPopoverLoginButton: "button[aria-label='Log in']",
    categoryLink: '[data-test-id=LinkToUrl]',
    headerContainer: '[data-test-id=header]',
    subcategoryLink: 'a',
    userAccountButton: '[data-test-id=UserAccount]',
} as const

/**
 * Navigates to the main category of products if the subcategory name is not provided,
 * otherwise it navigates to the subcategory of products page.
 * @param category {string} The main category of products name.
 * @param subcategory {string} The subcategory of products name. Optional parameter.
 */
function navigateToProductCategOrSubcategPage(
    category: string,
    subcategory?: string
): void {
    if (!subcategory)
        cy.get(ElementLocators.categoryLink).contains(category).click()
    else {
        cy.get(ElementLocators.headerContainer).within(() => {
            cy.get(ElementLocators.categoryLink)
                .contains(category)
                .trigger('mouseover')
            cy.get(ElementLocators.subcategoryLink)
                .contains(subcategory)
                .click()
        })
    }
}

/**
 * Hovers the cursor over the user account icon button
 * and starts the authentication flow.
 * TODO: user account icon button needs testid attribute.
 */
function proceedToAuthentication(): void {
    cy.get(ElementLocators.userAccountButton).click()
}

export const Header = {
    navigateToProductCategOrSubcategPage,
    proceedToAuthentication,
}
