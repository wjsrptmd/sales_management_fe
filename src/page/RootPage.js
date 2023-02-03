import React from 'react';
import 'page/steller.css';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export default function RootPage() {
  console.log('root page');
  const navigate = useNavigate();
  //   const goMainPage = () => {
  //     navigate('/mainPage');
  //   };
  //   const goLoginPage = () => {
  //     navigate('/login');
  //   };

  const accessToken = cookies.get(process.env.REACT_APP_AC_TOKEN);
  const refreshToken = cookies.get(process.env.REACT_APP_RF_TOKEN);
  if (accessToken === undefined || refreshToken === undefined) {
    navigate('/login');
  } else {
    navigate('/mainPage');
  }

  console.log(accessToken);

  return <div className="RootPage">대기중 ....</div>;
}
