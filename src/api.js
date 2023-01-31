import axios from "axios";

// axios 인스턴스를 만들 때 구성 기본 값 설정
const instance = axios.create({
  baseURL: 'http://localhost:5000'
});

// 인스턴스가 생성 된 후 기본값 변경
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export function test() {
  return instance.get('/');
}

// export function login() {
//   return axios.get(root);
// }
