const getTodoTitle = require('./typicode');
const axios = require('axios');

//Stack overflow: https://stackoverflow.com/questions/45016033/how-do-i-test-axios-in-jest
jest.mock('axios');

beforeEach(() => {
  axios.mockClear();
})

it('returns the title of todo', async () => {
  axios.get.mockImplementation(() => Promise.resolve({
    data: {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }
  }));

  const title = await getTodoTitle();
  expect(title).toEqual('delectus aut autem');
});

it('handles rejection with null', async () => {
  axios.get.mockImplementation(() => Promise.reject("API failure"));

  const title = await getTodoTitle();
  expect(title).toEqual(null);
});
