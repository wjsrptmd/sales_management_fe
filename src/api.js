import axios from 'axios';

// axios 인스턴스를 만들 때 구성 기본 값 설정
const instance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

// 인스턴스가 생성 된 후 기본값 변경
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const test = () => {
  console.log('test');
  return instance.get('/');
};

const login = () => {
  return instance.post('/login');
};

export { test, login };
