import React, { useEffect } from 'react';

export default function ErrorPage() {
  useEffect(() => {
    console.log('ErrorPage');
  });
  return <div>에러페이지 입니다.</div>;
}
