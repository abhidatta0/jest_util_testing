const axios = require('axios');

async function getTodoTitle() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data.title;
  }
  catch (e) {
    return null;
  }
}

module.exports = getTodoTitle;
