import React from "react";
import "page/steller.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const { test, login } = require("../../api.js");

export default function LoginPage() {
  // const [data, setData] = useState(null);
  // test()
  //   .then(function (response) {
  //     // 성공한 경우 실행
  //     console.log(response.data);
  //     setData(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     // 에러인 경우 실행
  //     console.log(error);
  //   });

  const [userId, setId] = useState(undefined);
  const [userPw, setPw] = useState(undefined);

  const navigate = useNavigate();
  const goMainPage = () => {
    const isEmpty = userId === undefined || userPw === undefined;

    if (isEmpty) {
      // TODO : userId, userPw 값이 비어 있다고 알려주자.
    } else {
      // let isOk = false;
      test()
        .then(function (response) {
          // 성공한 경우 실행
          console.log(response.data["message"]);
        })
        .catch(function (error) {
          // 에러인 경우 실행
          console.log(error);
        });
      navigate("/mainPage");
    }
  };

  const userLogin = () => {
    login()
      .then(function (response) {
        // 성공한 경우 실행
        console.log(response.data["message"]);
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
            value={userId || undefined}
            onChange={(e) => setId(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="비밀번호를 입력해 주세요."
            value={userPw || undefined}
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
