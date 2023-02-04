import axios from 'axios';

// axios 인스턴스를 만들 때 구성 기본 값 설정
const instance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

const login = () => {
  return instance.post('/login');
};

const checkAuthorization = () => {
  return instance.get('/token/authorization');
};

export { login, checkAuthorization };
