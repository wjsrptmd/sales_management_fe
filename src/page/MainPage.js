import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();
  return <div className="MainPage">MainPage 입니다. 첫 페이지</div>;
}
