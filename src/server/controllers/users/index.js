import axios from 'axios';

async function usersHandler(req, res) {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

  res.json(data);
}

export default usersHandler;
