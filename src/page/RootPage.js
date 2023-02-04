import React, { useEffect } from 'react';
import 'page/steller.css';
import { useNavigate } from 'react-router-dom';
const { checkAuthorization } = require('api.js');

export default function RootPage() {
  console.log('root page');

  const navigate = useNavigate();

  useEffect(() => {
    console.log('RootPage');

    checkAuthorization()
      .then(function (res) {
        console.log(res.data['message']);
        const authorized = res.data['success'];
        if (authorized) {
          navigate('/mainPage');
        } else {
          navigate('/login');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return <div className="RootPage">대기중 ....</div>;
}
