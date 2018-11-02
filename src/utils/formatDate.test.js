import formatDate from "./formatDate"

describe("formatDate", () => {
	it("should be defined as a function", () => {
		expect(formatDate).toBeDefined()
		expect(typeof formatDate).toBe("function")
	})
	it("should format dates", () => {
		const date = new Date(Date.parse("Fri Nov 02 2018 14:25:38 GMT+0100 (Central European Standard Time)"))
		const expected = "2018-11-02 14:25:38"
		expect(formatDate(date)).toEqual(expected)
	})
})