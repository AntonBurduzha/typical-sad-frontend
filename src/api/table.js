import axios from 'axios';

export default {
  getRegions(success, error) {
    axios.get('/static/ukraine_region.json')
      .then(res => success(res.data.regions))
      .catch(() => error());
  }
};
