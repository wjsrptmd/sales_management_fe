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

  const hashedPassword = async (originSalt) => {
    const { password, salt } = await createHashedPassword(userPw, originSalt);
    return { password, salt };
  };

  const saltFromServer = async () => {
    return getSalt()
      .then(function (response) {
        return response.data['salt'];
      })
      .catch(function (error) {
        // 에러인 경우 실행
        console.log(error);
        return undefined;
      });
  };

  const signupUser = async () => {
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
  };

  const userLogin = async () => {
    try {
      const saltRes = await getSalt();
      const originSalt = saltRes.data['salt'];
      console.log(`받아온 salt ${originSalt}`);
      if (originSalt) {
        const { password, salt } = await createHashedPassword(userPw, originSalt);
        console.log(`hashedPassword : ${password}, salt : ${salt}`);
        const loginRes = await login(salt, password);
        const success = loginRes.data['success'];
        if (success) {
          navigate('/MainPage');
        } else {
          const message = loginRes.data['message'];
          console.log(message);
          // TODO : dialog 처리
        }
      } else {
        console.log('아이디가 없습니다.');
      }
    } catch (err) {
      console.log(err);
    }
  };

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
          <button className="btn btn-primary" onClick={signupUser}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
