const { fetchEvenTodos } = require('./api')

describe('Todo Data', ()=>{

    describe('API health check', ()=>{
        test('Should return data correctly', async()=>{
            const response = await fetchEvenTodos();
            expect(response.length).toBeGreaterThan(0);
            expect(typeof response[0].title).toBe('string');
        });
    });
});