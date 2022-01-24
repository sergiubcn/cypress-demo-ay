const BypassCountryChooserLSKey = 'showCountrySwitchPopup'

function loadApp(bypassCountryChooser: boolean = true): void {
    if (bypassCountryChooser)
        localStorage.setItem(BypassCountryChooserLSKey, 'false')
    cy.viewport('macbook-15')
    cy.visit('/')
}

export const App = {
    loadApp,
}
