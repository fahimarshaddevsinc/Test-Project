import { navigateTo } from "../support/page_object/navigationBar.js"
import { onFormLayoutsPage } from "../support/page_object/formLayoutsPage.js"

describe('Should correctly submit all forms on form Layouts Page', () => {

    beforeEach(() => {
        cy.visit('/')
        navigateTo.formLayoutsPage()
    })

    it('should submit inline form', () => {
        onFormLayoutsPage.submit_inline_form('Fahim', 'Arshad') 
    })

    it('should submit basic form', () => {
        onFormLayoutsPage.submit_basic_form('fahim.arshad@devsinc.com', 'fahimarshad')
    })

    it('should submit Using the Grid Form', () => {
        onFormLayoutsPage.submit_using_the_grid_form('fahim.arshad@devsinc.com', 'fahimarshad')
    })

    it('should check that radio buttons are functioning correctly', () => {
        onFormLayoutsPage.check_radio_buttons()
    })

    it('should check that using the Grid Form third radio button is disabled', () => {
        onFormLayoutsPage.check_using_the_grid_form_third_radio_button_is_disabled()
    })

})