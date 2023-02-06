import React, { useEffect } from 'react';
import './steller.css';
import { useNavigate } from 'react-router-dom';
const { checkAuthorization } = require('../api.js');

// const createHashedPassword = (password) => {
//   return crypto.createHash('sha512').update(password).digest('base64');
// };

export default function RootPage() {
  // const pw1 = 'pw1234';
  // bcrypt.genSalt(10, (err, salt) => {
  //   console.log(`salt : ${salt}`);
  //   bcrypt.hash(pw1, salt, (err, hash) => {
  //     console.log(`hash : ${hash}`);
  //   });
  // });

  const navigate = useNavigate();
  console.log('root page');

  useEffect(() => {
    checkAuthorization()
      .then(function (res) {
        console.log(res.data['message']);
        const authorized = res.data['success'];
        if (authorized) {
          navigate('/MainPage');
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
