/// <reference types="cypress" />

export class formLayoutsPage {
    
    //ALL LOCATORS
    elements = {
        //inline form
        inline_form_email_field:() => cy.contains('nb-card', 'Inline form').find('[placeholder="Jane Doe"]'),
        inline_form_password_field:() => cy.contains('nb-card', 'Inline form').find('[placeholder="Email"]'),
        inline_form_remember_me_checkbox:() => cy.contains('nb-card', 'Inline form').find('.custom-checkbox'),
        inline_form_submit_button:() => cy.contains('nb-card', 'Inline').find('[type="submit"]'),

        //using the grid form
        using_grid_form_email_field:() => cy.contains('nb-card', 'Using the Grid').find('[placeholder="Email"]'),
        using_grid_form_password_field:() => cy.contains('nb-card', 'Using the Grid').find('[placeholder="Password"]'),
        using_grid_form_first_radio_button:() => cy.contains('nb-card', 'Using the Grid').get('[type="radio"]').then( radioButtons => {
            cy.wrap(radioButtons).eq(0)}),
        using_grid_form_second_radio_button:() => cy.contains('nb-card', 'Using the Grid').get('[type="radio"]').then( radioButtons => {
            cy.wrap(radioButtons).eq(1)}),
        using_grid_form_third_radio_button:() => cy.contains('nb-card', 'Using the Grid').get('[type="radio"]').then( radioButtons => {
            cy.wrap(radioButtons).eq(2)}),
        using_grid_form_signin_button:() => cy.contains('nb-card','Using the Grid').find('[type="submit"]'),

        //basic form    
        basic_form_email_field:() => cy.contains('nb-card', 'Basic form').find('[placeholder="Email"]'),
        basic_form_password_field:() => cy.contains('nb-card', 'Basic form').find('[placeholder="Password"]'),
        basic_form_check_me_out_checkbox:() => cy.contains('nb-card', 'Basic form').find('[type="checkbox"]'),
        basic_form_submit_button:() => cy.contains('nb-card', 'Basic form').find('[type="submit"]'),

        //form without labels form
        form_without_labels_recepients_field:() => cy.contains('nb-card', 'Form without labels').find('[placeholder="Recipients"]'),
        form_without_labels_subject_field:() => cy.contains('nb-card', 'Form without labels').find('[placeholder="Subject"]'),
        form_without_labels_message_field:() => cy.contains('nb-card', 'Form without labels').find('[placeholder="Message"]'),
        form_without_labels_send_button:() => cy.contains('nb-card', 'Form without labels').find('type="submit'),

        //block form
        block_form_first_name_field:() => cy.contains('nb-card', 'Block form').find('[placeholder="First Name'),
        block_form_last_name_field:() => cy.contains('nb-card', 'Block form').find('[placeholder="Last Name'),
        block_form_email_field:() => cy.contains('nb-card', 'Block form').find('[placeholder="Email'),
        block_form_website_field:() => cy.contains('nb-card', 'Block form').find('[placeholder="Website'),

        //Horizontal form
        hortizontal_form_email_field:() => cy.contains('nb-card', 'Horizontal form').find('[placeholder="Email'),
        hortizontal_form_password_field:() => cy.contains('nb-card', 'Horizontal form').find('[placeholder="Password'),
        hortizontal_form_remember_me_checkbox:() => cy.contains('nb-card', 'Horizontal form').find('[type="checkbox"]'),
        hortizontal_form_signin_button:() => cy.contains('nb-card', 'Horizontal form').find('type="submit')
    }

    //SET methods
    //Inline Form
    enter_inline_form_email(email) {
        this.elements.inline_form_email_field().type(email)
    }

    enter_inline_form_password(password) {
        this.elements.inline_form_password_field().type(password)
    }

    check_inline_form_remember_me_checkbox() {
        this.elements.inline_form_remember_me_checkbox().click({force: true})
    }

    click_inline_form_submit_button() {
        this.elements.inline_form_submit_button().click()
    }

    //Using the Grid Form
    enter_using_grid_form_email(email) {
        this.elements.using_grid_form_email_field().type(email)
    }

    enter_using_grid_form_password(password) {
        this.elements.using_grid_form_password_field().type(password)
    }

    check_using_the_grid_form_first_radio_button() {
        this.elements.using_grid_form_first_radio_button().check({force: true})
    }

    check_using_the_grid_form_second_radio_button() {
        this.elements.using_grid_form_second_radio_button().check({force: true})
    }

    check_using_the_grid_form_third_radio_button() {
        this.elements.using_grid_form_third_radio_button().check({force: true})
    }

    click_using_the_grid_form_signin_button() {
        this.elements.using_grid_form_signin_button().click()
    }

    //basic Form
    enter_basic_form_email(email) {
        this.elements.basic_form_email_field().type(email)
    }

    enter_basic_form_password(password) {
        this.elements.basic_form_password_field().type(password)
    }

    check_basic_form_check_me_out_checkbox() {
        this.elements.basic_form_check_me_out_checkbox().click({force: true})
    }

    click_basic_form_submit_button() {
        this.elements.basic_form_submit_button().click()
    }

    //Form Without Labels


    //Block Form


    //Horizontal Form


    //Test methods
    submit_inline_form(email, password) {
        this.enter_inline_form_email(email)
        this.enter_inline_form_password(password)
        this.check_inline_form_remember_me_checkbox()
        this.click_inline_form_submit_button()
    }
    
    submit_basic_form(email, password) {
        this.enter_basic_form_email(email)
        this.enter_basic_form_password(password)
        this.check_basic_form_check_me_out_checkbox()
        this.click_basic_form_submit_button()
    }

    submit_using_the_grid_form(email, password) {
        this.enter_using_grid_form_email(email)
        this.enter_using_grid_form_password(password)
        this.check_using_the_grid_form_first_radio_button()
        this.click_using_the_grid_form_signin_button()
    }

    check_radio_buttons() {
        this.check_using_the_grid_form_first_radio_button()
        this.elements.using_grid_form_second_radio_button().should('not.be.checked')
        this.check_using_the_grid_form_second_radio_button()
        this.elements.using_grid_form_second_radio_button().should('be.checked')
        this.elements.using_grid_form_first_radio_button().should('not.be.checked')
    }

    check_using_the_grid_form_third_radio_button_is_disabled() {
        this.elements.using_grid_form_third_radio_button().should('be.disabled')
    }
}

export const onFormLayoutsPage = new formLayoutsPage() 