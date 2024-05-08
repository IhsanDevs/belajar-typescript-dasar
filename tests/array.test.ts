import printArray from '../src/array';
import printReadOnlyArray from '../src/readonly-array';
describe("Array", function () {
    it("Should be array", function () {
        const names: Array<String> = [
            "ihsan",
            "devs",
        ]

        const result = printArray(names)

        result.forEach(function (values: Array<string>) {
            expect(`${result.indexOf(values) + 1}. ${values}`)
        })
    })

    it("Should be Readonly Array", function () {
        const names: ReadonlyArray<string> = [
            "ihsan",
            "devs"
        ]

        const result = printReadOnlyArray(names)

        result.forEach(function (values: Array<string>) {
            expect(`${result.indexOf(values) + 1}. ${values}`)
        })
    })

    it("Should support tupple", function () {
        const biodata: readonly [string, string, number] = [
            'ihsan devs', 'belajar TS', 1
        ]

        biodata.forEach(function (data) {
            expect(`${biodata.indexOf(data) + 1}. ${data}`)
        })
    })
})