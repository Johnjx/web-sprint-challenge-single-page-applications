describe("Pizza App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/") 
    })
    
    it("Sanity Check", () => {
        expect(2+2).to.equal(4);
    })
})