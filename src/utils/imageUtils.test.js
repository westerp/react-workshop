import * as imageUtils from "./imageUtils"

let oldCreateElement
let failImgSrcRequest = false

beforeAll(() => {
	oldCreateElement = document.createElement

	document.createElement = (type) => {
		const el = oldCreateElement.call(document, type)
		const proxy = new Proxy(el, {
			set: (obj, prop, value) => {
				if (prop !== "src"){
					obj[prop] = value
					return true
				}

				setTimeout(() => {
					if (failImgSrcRequest){
						obj.onerror({message: "mock error"})
						return
					}
					obj.onload({})
				}, 0)

				return true
			}
		})
		return proxy
	}
})
beforeEach(() => {
	failImgSrcRequest = false
})
afterAll(() => {
	document.createElement = oldCreateElement
})

describe("imageUtils", () => {
	it("should be defined", () => {
		expect(typeof imageUtils).toBe(typeof {})
	})
	describe("loadImage()", () => {
		const {loadImage} = imageUtils
		it("should be defined", () => {
			const funcType = typeof (() => {})
			expect(typeof loadImage).toBe(funcType)
		})
		it("should be async/return a promise", () => {
			expect(loadImage().then).toBeDefined()
		})
		it("should resolve promise with src if image loading succeeds", async () => {
			expect.assertions(1)

			const {loadImage} = imageUtils
			const result = await loadImage("abc")
			expect(result).toEqual("abc")
		})
		it("should reject promise if image loading fails", async () => {
			expect.assertions(1)

			const {loadImage} = imageUtils
			failImgSrcRequest = true
			let error

			try { await loadImage("abc") } catch (err) { error = err }
			expect(error).toBeDefined()
		})
	})
})