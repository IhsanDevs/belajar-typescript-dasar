import { sayHello } from "../src/say-hello";

describe("Say Hello Function", function () {
    it("Should be able to say \"Hello Ihsan Devs\"", function () {
        const name = "Ihsan Devs";
        const result = sayHello(name);
        expect(result).toBe("Hello Ihsan Devs!");
    })
})