import React, { useEffect } from 'react';
import { useState } from 'react';
import '../css/steller';
import { useNavigate } from 'react-router-dom';
const { findUserId, signup } = require('../api.js');
const { createHashedPassword } = require('../util/pwCreater');

export default function SignUpPage() {
  const detailTextFonstSize = '13px';
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [idDetail, setIdDetail] = useState(undefined);
  const [idDetailColor, setIdDetailColor] = useState(undefined);
  const [idOk, setIdOk] = useState(false);

  const [pw1, setPw1] = useState('');
  const [pw1Detail, setPw1Detail] = useState(undefined);
  const [pw1DetailColor, setPw1DetailColor] = useState(undefined);
  const [pw1Ok, setPw1Ok] = useState(false);

  const [pw2, setPw2] = useState('');
  const [pw2Detail, setPw2Detail] = useState(undefined);
  const [pw2DetailColor, setPw2DetailColor] = useState(undefined);
  const [pw2Ok, setPw2Ok] = useState(false);

  function onLeaveIdInput() {
    if (id.length < 3) {
      setIdDetail('아이디는 3 글자 이상 이어야 합니다.');
      setIdDetailColor('red');
      setIdOk(false);
    } else {
      findUserId(id)
        .then(function (res) {
          const findUserId = res.data['result'];
          if (findUserId) {
            setIdDetail('이미 사용중인 아이디 입니다.');
            setIdDetailColor('red');
            setIdOk(false);
          } else {
            setIdDetail('사용 가능한 아이디 입니다.');
            setIdDetailColor('green');
            setIdOk(true);
          }
        })
        .catch(function (error) {
          console.log(error);
          setIdOk(false);
        });
    }
  }

  function checkSamePw() {
    if (pw1 !== pw2) {
      setPw2Detail('비밀번호가 일치하지 않습니다.');
      setPw2DetailColor('red');
      setPw2Ok(false);
    } else {
      setPw2Detail('비밀번호가 일치 합니다.');
      setPw2DetailColor('green');
      setPw2Ok(true);
    }
  }

  function onLeavePw1Input() {
    if (pw1.length < 8) {
      setPw1Detail('비밀번호는 8 글자 이상 이어야 합니다.');
      setPw1DetailColor('red');
      setPw1Ok(false);
    } else {
      setPw1Detail('사용가능한 비밀번호 입니다.');
      setPw1DetailColor('green');
      setPw1Ok(true);
    }

    if (pw2.length > 0) {
      checkSamePw();
    }
  }

  function onLeavePw2Input() {
    if (pw2.length > 0) {
      checkSamePw();
    } else {
      setPw2Detail('');
      setPw2Ok(false);
    }
  }

  async function userSignup() {
    if (!idOk || !pw1Ok || !pw2Ok) {
      // 들어올 수 없다. 버튼이 disabled 이기 때문에.
      console.log('비정상 가입하기 !!');
    } else {
      try {
        const { password, salt } = await createHashedPassword(pw1);
        const res = await signup(id, password, salt);
        if (res.data['result']) {
          navigate('/LoginPage/SignUpPage/End');
        } else {
          const message = res.data['message'];
          console.log(`message : ${message}`);
          // TODO : dialog 처리
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    document.getElementById('signUpBtn').disabled = !(idOk && pw1Ok && pw2Ok);
  }, [idOk, pw1Ok, pw2Ok]);

  return (
    <div className="custom_center">
      <h3>회원가입</h3>
      <div>
        <h6 align="left" className="section-secondary-title">
          아이디
        </h6>
        <input
          className="form-control"
          onBlur={onLeaveIdInput}
          type="text"
          value={id || ''}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <span style={{ fontSize: `${detailTextFonstSize}`, color: `${idDetailColor}` }}>{idDetail}</span>
      </div>
      <div>
        <h6 align="left" className="section-secondary-title mt-5">
          비밀번호
        </h6>
        <input
          className="form-control"
          autoComplete="one-time-code"
          onBlur={onLeavePw1Input}
          type="password"
          value={pw1 || ''}
          onChange={(e) => setPw1(e.target.value)}
        ></input>
        <span style={{ fontSize: `${detailTextFonstSize}`, color: `${pw1DetailColor}` }}>{pw1Detail}</span>
      </div>
      <div>
        <h6 align="left" className="section-secondary-title mt-5">
          비밀번호 재확인
        </h6>
        <input
          className="form-control"
          autoComplete="one-time-code"
          onBlur={onLeavePw2Input}
          type="password"
          value={pw2 || ''}
          onChange={(e) => setPw2(e.target.value)}
        ></input>
        <span style={{ fontSize: `${detailTextFonstSize}`, color: `${pw2DetailColor}` }}>{pw2Detail}</span>
      </div>
      <br></br>
      <br></br>
      <button id="signUpBtn" className="btn btn-primary w-lg" onClick={userSignup}>
        가입하기
      </button>
    </div>
  );
}
