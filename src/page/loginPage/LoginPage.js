import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { test } from "api";

export default function LoginPage() {
  const [data, setData] = useState(null);
  test()
    .then(function (response) {
      // 성공한 경우 실행
      console.log(response.data);
      setData(JSON.stringify(response.data));
    })
    .catch(function (error) {
      // 에러인 경우 실행
      console.log(error);
    });
  const navigate = useNavigate();
  const goMainPage = () => {
    navigate("/mainPage");
  };

  const title = `LoginPage 입니다. 첫 페이지. 테스트 ${data}`;
  return (
    <div className="LoginPage">
      {title}
      <button onClick={goMainPage}>메인 페이지</button>
    </div>
  );
}
