describe("Object", function () {
    it("Should be object", function () {
        const biodata: { name: string, age: number, address?: string } = {
            name: "Ihsan Devs",
            age: 20,
            address: "Indonesia"
        }

        console.info(biodata)

        biodata.name = "Kurniawan"

        console.info(biodata)
    })
})