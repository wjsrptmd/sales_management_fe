import React from 'react';
import '../css/steller.css';
import '../css/custom.css';
import { useNavigate } from 'react-router-dom';

export default function SignUpPageEnd() {
  const navigate = useNavigate();

  function moveToLoginPage() {
    navigate('/LoginPage');
  }

  return (
    <div className="custom_center">
      <h3 align="center">회원가입 완료</h3>
      <br></br>
      <div align="center">
        <button className="btn btn-primary w-lg" onClick={moveToLoginPage}>
          로그인 화면으로
        </button>
      </div>
    </div>
  );
}
