describe("Pizza App, Order Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza") 
    })
    
    it("Sanity Check", () => {
        expect(2+2).to.equal(4);
    })

    const nameInput = () => cy.get("input[name=name]");
    const pepperoniInput = () => cy.get("input[name=pepperoni]");
    const baconInput = () => cy.get("input[name=bacon]");
    const submitBtn = () => cy.get(`button[id="order-button"]`)

    it("Proper Elements are showing", () => {
        nameInput().should("exist");
        pepperoniInput().should("exist");
        baconInput().should("exist");
        submitBtn().should("exist");
    })

    describe("User Actions", () => {
        it("can add text to the name field", () => {
            nameInput().should("have.value", "")
            .type("John")
            .should("have.value", "John");
        })

        it("can select multiple toppings", () => {
            pepperoniInput().should("not.be.checked")
            .check()
            .should("be.checked");
            baconInput().should("not.be.checked")
            .check()
            .should("be.checked");
        })

        it("test that you can submit the form, not strict on inputs", () => {
            nameInput().type("Jay")
            baconInput().check()
            submitBtn().should("not.be.disabled")
            submitBtn().click();
        })
    })

})