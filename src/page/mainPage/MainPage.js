import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const goLoginPage = () => {
    navigate("/");
  };
  return (
    <div className="MainPage">
      MainPage 입니다. 첫 페이지
      <button onClick={goLoginPage}>loginPage 로 이동</button>
    </div>
  );
}
