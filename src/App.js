import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { startPolling } from './service/tokenUpdater';
import RootPage from './page/RootPage';
import LodingPage from './page/LodingPage';

function App() {
  const LoginPage = lazy(() => import('./page/LoginPage'));
  const MainPage = lazy(() => import('./page/MainPage'));
  const SignUpPage = lazy(() => import('./page/SignUpPage'));
  const SignUpPageEnd = lazy(() => import('./page/SignUpEndPage'));
  const ErrorPage = lazy(() => import('./page/ErrorPage'));
  const NotFoundPage = lazy(() => import('./page/NotFoundPage'));

  startPolling();
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<LodingPage />}>
          <Routes>
            <Route path={'/'} element={<RootPage />}></Route>
            <Route path={'/LoginPage'} element={<LoginPage />}></Route>
            <Route path={'/SignUpPage'} element={<SignUpPage />}></Route>
            <Route path={'/SignUpEndPage'} element={<SignUpPageEnd />}></Route>
            <Route path={'/MainPage'} element={<MainPage />}></Route>
            <Route path={'/ErrorPage'} element={<ErrorPage />}></Route>
            <Route path={'/*'} element={<NotFoundPage />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
