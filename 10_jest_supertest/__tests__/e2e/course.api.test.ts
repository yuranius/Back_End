import request from 'supertest'
import { app } from '../../src'

describe('/course', () => {

    beforeAll( async () => {
        await request(app).delete('__test__/data')
    })



    it('should return 200 and empty array', (done) => {
        //expect(1).toBe(1)
        request(app)
        .get('/courses')
        .expect(200,[])
        done()
    })

    it('should return 404 for not existing course', (done) => {
        //expect(1).toBe(1)
        request(app)
        .get('/courses/1')
        .expect(200,[])
        done()
    })
    
})