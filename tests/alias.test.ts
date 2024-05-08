import { Product, Category } from '../src/alias';

describe("Alias", function () {

    it("Should be alias", function () {
        const product: Product = {
            id: 1,
            name: "Stone Island",
            desc: "",
            price: 10000,
            categories: [
                {
                    name: 'Cloth',
                },

                {
                    name: "Discount"
                }
            ]
        }

        expect(typeof product).toBe("object")

        console.info(product)
    })
})