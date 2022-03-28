import index  from "../index"
import supertest from 'supertest'

const request = supertest(index.app)

describe('Test endpoint responses', () => {

    it('Test /api/resize endpoint to be responsive', async () => {
        const response = await request.get('/api/resize?name=image1&width=1000a&height=600')
        expect(response.status).toBe(200)
    })

})