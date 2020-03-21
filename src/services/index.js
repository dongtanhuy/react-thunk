import axios from 'axios';


const fetchUserService = username => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}

export default fetchUserService;