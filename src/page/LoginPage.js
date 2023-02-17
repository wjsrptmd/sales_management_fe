import React, { useEffect } from 'react';
import './steller.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const { login, getSalt, signup } = require('../api.js');
const { createHashedPassword } = require('../util/pwCreater');

export default function LoginPage() {
  const [userId, setId] = useState(undefined);
  const [userPw, setPw] = useState(undefined);

  const navigate = useNavigate();

  async function hashedPassword(password, originSalt) {
    const { pw, salt } = await createHashedPassword(password, originSalt);
    return pw;
  }

  async function userSignup() {
    try {
      const { password, salt } = await createHashedPassword(userPw);
      const res = await signup(userId, password, salt);
      const result = res.data['result'];
      if (result == 'success') {
        console.log('success signup');
      } else {
        const message = res.data['message'];
        console.log(message);
        // TODO : dialog 처리
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function userLogin() {
    try {
      const saltRes = await getSalt(userId);
      const originSalt = saltRes.data['salt'];
      if (originSalt) {
        const { password, salt } = await createHashedPassword(userPw, originSalt);
        const loginRet = await login(userId, password);
        const result = loginRet.data['result'];
        if (result == 'success') {
          navigate('/MainPage');
        } else if (result == 'passwordFail') {
          console.log('password 가 틀렸습니다.');
          // TODO : dialog 처리
        } else {
          // error 처리. 실제로 일어날 수 없는 상황.
        }
      } else {
        console.log('아이디가 없습니다.');
        // TODO : dialog 처리
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="LoginPage">
      <div className="login">
        <div className="form-group">
          <h3>Login</h3>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="ID 를 입력해 주세요."
            value={userId || ''}
            onChange={(e) => setId(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            value={userPw || ''}
            onChange={(e) => setPw(e.target.value)}
          ></input>
        </div>
        <div>
          <button className="btn btn-primary" onClick={userLogin}>
            로그인
          </button>
          <button className="btn btn-primary" onClick={userSignup}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
