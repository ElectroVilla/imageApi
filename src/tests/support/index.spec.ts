import support from "../../support"

describe('Testing support functions', () => {

        it('Check caching function', () => {
            expect(support.getCach('test') instanceof Promise).toBeTruthy()
        })

        it('Check validation function', () => {
            expect(support.validateResizeResponse("name", 100, 100)).toBeTruthy()
        })
    })