import React, { useEffect } from 'react';
import '../css/loading';
import '../css/custom';
import { useNavigate } from 'react-router-dom';
const { checkAuthorization } = require('../api.js');

export default function RootPage() {
  const navigate = useNavigate();
  useEffect(() => {
    checkAuthorization()
      .then(function (res) {
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

  return (
    <div className="custom_center">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-text">loading</div>
      </div>
    </div>
  );
}
