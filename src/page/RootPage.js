import React, { useEffect } from 'react';
import './steller.css';
import { useNavigate } from 'react-router-dom';
const { checkAuthorization } = require('../api.js');

export default function RootPage() {
  const navigate = useNavigate();
  useEffect(() => {
    checkAuthorization()
      .then(function (res) {
        console.log(res.data['message']);
        const authorized = res.data['success'];
        if (authorized) {
          setTimeout(navigate('/MainPage'), 3000);
        } else {
          navigate('/LoginPage');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return <div className="RootPage">대기중 ....</div>;
}
