import { navigateTo } from "../support/page_object/navigationBar.js"

describe('testCasesWIthPageObjectDesignPattern', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('verify navigation across the pages', () => {
        navigateTo.stepperPage()
        navigateTo.accordionPage()
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.dialogPage()
        navigateTo.windowPage()
        navigateTo.popoverPage()
        navigateTo.toastrPage()
        navigateTo.toolTipPage()
        navigateTo.calendarPage()
        navigateTo.smartTablePage()
        navigateTo.treeGridPage()
        navigateTo.loginPage()
        navigateTo.registerPage()
        navigateTo.requestPasswordPage()
        // navigateTo.resetPasswordPage()
    })



})