import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/home';
import MemberPage from './pages/memberPage/member';
import MyPage from './pages/myPage/my';
import QuestionPage from './pages/questionPage/question';
import RecipePage from './pages/recipePage/recipe';
import StartPage from './pages/startPage/start';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StartPage />}></Route>
        <Route path='/member' element={<MemberPage />}></Route>
        <Route path='/question' element={<QuestionPage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/recipe' element={<RecipePage />}></Route>
        <Route path='/my' element={<MyPage />}></Route>
      </Routes>
    </div>
   
  );
}

export default App;
