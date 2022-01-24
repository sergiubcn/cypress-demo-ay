const ElementLocators = {
    emailField: '[data-testid=EmailField]',
    passwordField: '[data-testid=PasswordField]',
    submitLoginButton: '[data-testid=SubmitLogin]',
} as const

function logIntoUserAccount(email: string, password: string): void {
    cy.get(ElementLocators.emailField).type(email)
    cy.get(ElementLocators.passwordField).type(password)
    cy.get(ElementLocators.submitLoginButton).click()
}

export const AuthenticationModal = {
    logIntoUserAccount,
}
