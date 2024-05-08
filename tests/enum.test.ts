import { Customer, CustomerType } from "../src/enum"

describe("Enum", function () {
    it("Should be enum", function () {
        const customer: Customer = {
            id: 1,
            name: "Ihsan Devs",
            type: CustomerType.BASIC
        }

        console.info(customer)
    })
})