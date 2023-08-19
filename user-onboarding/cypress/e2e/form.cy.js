describe("Form",()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000');
    })

    /**
     * Get the Name input and type a name in it.
        Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
        Get the Email input and type an email address in it
        Get the password input and type a password in it
        Set up a test that will check to see if a user can check the terms of service box
        Check to see if a user can submit the form data
        Check for form validation if an input is left empty
     */

    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosBox = () => cy.get('input[name=termsofservice]');
    const submitBtn = () => cy.get('button[id=submit]');
    const errorDiv = () => cy.get('div[class=errors]');

    it('sanity test to make sure tests work',()=>{
        expect(1+1).to.equal(2);
    })

    it('the proper elements are showing',()=>{
        firstNameInput().should("exist");
        lastNameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        tosBox().should("exist");
        submitBtn().should("exist");
    })

    describe("Filling out inputs",()=>{
        it("can type into input boxes",()=>{
            firstNameInput()
                .should("have.value","")
                .type("Sydney")
                .should("have.value","Sydney");
            lastNameInput()
                .should("have.value","")
                .type("Gomez")
                .should("have.value","Gomez");
            passwordInput()
                .should("have.value","")
                .type("yesyesyesyes")
                .should("have.value","yesyesyesyes");
            emailInput()
                .should("have.value","")
                .type("sydneycamille0896@gmail.com")
                .should("have.value","sydneycamille0896@gmail.com");
            tosBox()
                .should("not.be.checked")
                .check()
                .should("be.checked");
            submitBtn().click();
        })
    })

    describe("validation checks exist when inputs are left blank",()=>{
        it("error div exists on form when inputs are left blank",()=>{
            firstNameInput()
                .should("have.value","")
                .type("Sydney")
                .should("have.value","Sydney");
            lastNameInput()
                .should("have.value","")
                .type("Gomez")
                .should("have.value","Gomez");
            errorDiv().should("exist");
        })
    })



})