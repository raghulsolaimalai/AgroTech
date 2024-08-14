import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

const registerUser = (user) => {
  return axios.post(`${API_URL}/register`, user);
};

const UserService = {
  registerUser
};

export default UserService;
