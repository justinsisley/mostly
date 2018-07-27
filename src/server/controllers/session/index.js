import axios from 'axios';

async function sessionHandler(req, res) {
  const { data } = await axios.get('https://randomuser.me/api/?inc=login');

  res.json({
    token: data.results[0].login.sha256,
  });
}

export default sessionHandler;
