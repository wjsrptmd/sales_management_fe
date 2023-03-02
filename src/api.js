import axios from 'axios';

// axios 인스턴스를 만들 때 구성 기본 값 설정
const instance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

function login(userId, userPw) {
  return instance.post('/login', {
    id: userId,
    pw: userPw,
  });
}

function findUserId(userId) {
  return instance.post('/login/id', {
    id: userId,
  });
}

function getSalt(userID) {
  return instance.post('/login/salt', {
    id: userID,
  });
}

function signup(id, hashedPassword, salt) {
  return instance.post('/login/signUp', {
    id: id,
    pw: hashedPassword,
    salt: salt,
  });
}

function checkAuthorization() {
  return instance.get('/authorization');
}

function renewalToken() {
  return instance.get('/authorization/renewal');
}

export { login, checkAuthorization, getSalt, signup, renewalToken, findUserId };
