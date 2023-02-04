import React from 'react';
import 'page/steller.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const { login } = require('../api.js');

export default function LoginPage() {
  const [userId, setId] = useState(undefined);
  const [userPw, setPw] = useState(undefined);

  const navigate = useNavigate();
  const userLogin = () => {
    login()
      .then(function (response) {
        // 성공한 경우 실행
        console.log(response.data);
        navigate('/mainPage');
      })
      .catch(function (error) {
        // 에러인 경우 실행
        console.log(error);
      });
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
            type="text"
            placeholder="비밀번호를 입력해 주세요."
            value={userPw || ''}
            onChange={(e) => setPw(e.target.value)}
          ></input>
        </div>
        <div>
          <button className="btn btn-primary" onClick={userLogin}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
