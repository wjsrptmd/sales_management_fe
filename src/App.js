//계승의프로젝트
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootPage from './page/RootPage';
import LoginPage from './page/loginPage/LoginPage';
import MainPage from './page/mainPage/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<RootPage />}></Route>
          <Route path={'/login'} element={<LoginPage />}></Route>
          <Route path={'/mainPage'} element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
