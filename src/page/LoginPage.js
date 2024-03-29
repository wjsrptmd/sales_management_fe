import React, { useState } from 'react';
import '../css/steller.css';
import '../css/custom.css';
import { useNavigate } from 'react-router-dom';
const { login, getSalt } = require('../api.js');
const { createHashedPassword } = require('../util/pwCreater');

export default function LoginPage() {
  const [userId, setId] = useState(undefined);
  const [userPw, setPw] = useState(undefined);

  const navigate = useNavigate();

  function moveToSignUpPage() {
    navigate('/SignUpPage');
  }

  async function userLogin() {
    try {
      if (userId && userPw) {
        const saltRes = await getSalt(userId);
        const originSalt = saltRes.data['salt'];
        if (originSalt) {
          const { password, salt } = await createHashedPassword(userPw, originSalt);
          const loginRet = await login(userId, password);
          const result = loginRet.data['result'];
          if (result === 'success') {
            navigate('/MainPage');
          } else if (result === 'passwordFail') {
            console.log('password 가 틀렸습니다.');
            // TODO : dialog 처리
          } else {
            // error 처리. 실제로 일어날 수 없는 상황.
          }
        } else {
          console.log('아이디가 없습니다.');
          // TODO : dialog 처리
        }
      } else {
        console.log('userId or  userPw is undefined');
        // TODO : dialog 처리
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleOnKeyPress(e) {
    if (e.key === 'Enter') {
      userLogin();
    }
  }

  return (
    <div className="custom_center">
      <div className="form-group">
        <h3 align="center">로그인</h3>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="ID 를 입력해 주세요."
          value={userId || ''}
          onChange={(e) => setId(e.target.value)}
          onKeyDown={handleOnKeyPress}
        ></input>
      </div>
      <div className="form-group">
        <input
          autoComplete="one-time-code"
          className="form-control"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          value={userPw || ''}
          onChange={(e) => setPw(e.target.value)}
          onKeyDown={handleOnKeyPress}
        ></input>
      </div>
      <div align="center">
        <button className="btn btn-primary" onClick={userLogin}>
          로그인
        </button>
        <button className="btn btn-primary" onClick={moveToSignUpPage}>
          회원가입
        </button>
      </div>
    </div>
  );
}
