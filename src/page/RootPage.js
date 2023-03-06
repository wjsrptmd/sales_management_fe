import React, { useEffect } from 'react';
import '../css/loading';
import '../css/custom';
import '../css/steller.css';
import { useNavigate } from 'react-router-dom';
const { checkAuthorization } = require('../api.js');

export default function RootPage() {
  const navigate = useNavigate();
  useEffect(() => {
    checkAuthorization()
      .then(function (res) {
        const authorized = res.data['success'];
        if (authorized) {
          navigate('/MainPage');
        } else {
          navigate('/LoginPage');
        }
      })
      .catch(function (error) {
        console.log(error);
        navigate('/ErrorPage');
      });
  });

  return (
    <div className="custom_center">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-text">loading</div>
      </div>
    </div>
  );
}
