import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const goMainPage = () => {
    navigate("/mainPage");
  };
  return (
    <div className="LoginPage">
      LoginPage 입니다. 첫 페이지
      <button onClick={goMainPage}>mainPage 로 이동</button>
    </div>
  );
}
