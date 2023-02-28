import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpPageEnd() {
  const navigate = useNavigate();

  function goToLoginPage() {
    navigate('/LoginPage');
  }

  return (
    <div className="custom_center">
      회원가입 완료
      <br></br>
      <br></br>
      <br></br>
      <button className="btn btn-primary w-lg" onClick={goToLoginPage}>
        로그인 화면으로 돌아가기
      </button>
    </div>
  );
}
