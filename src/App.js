import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/home';
import MemberPage from './pages/memberPage/member';
import MyPage from './pages/myPage/my';
import QuestionPage from './pages/questionPage/question';
import RecipePage from './pages/recipePage/recipe';
import StartPage from './pages/startPage/start';
import LoginPage from './pages/loginPage/login';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </div>
   
  );
}

export default App;


