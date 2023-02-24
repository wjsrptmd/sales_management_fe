//계승의프로젝트
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { startPolling } from './service/tokenUpdater';
import RootPage from './page/RootPage';
import LoginPage from './page/LoginPage';
import MainPage from './page/MainPage';

function App() {
  startPolling();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<RootPage />}></Route>
          <Route path={'/LoginPage'} element={<LoginPage />}></Route>
          <Route path={'/MainPage'} element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
