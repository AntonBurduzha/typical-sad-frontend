import axios from 'axios';

export default {
  createUser(user, success, error) {
    axios.post('/signup', user)
      .then(() => success())
      .catch(() => error());
  }
};
