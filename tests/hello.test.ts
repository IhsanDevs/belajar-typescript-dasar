describe("Hello World", function () {
    it("should return 'Hello World!'", function () {
        const name = "World";
        const result = `Hello ${name}!`;
        expect(result).toBe("Hello World!");
    });
});