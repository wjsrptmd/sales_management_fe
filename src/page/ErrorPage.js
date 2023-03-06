import React, { useEffect } from 'react';
import '../css/steller.css';

export default function ErrorPage() {
  useEffect(() => {
    console.log('ErrorPage');
  });
  return <div className="custom_center">에러페이지 입니다.</div>;
}
