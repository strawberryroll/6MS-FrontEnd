import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/home';
import MemberPage from './pages/memberPage/member';
import SignUp from './pages/memberPage/signup';
import LoginPage from './pages/memberPage/login';
import MyPage from './pages/myPage/mypage';
import SurveyPage from './pages/surveyPage/survey';
import RecipePage from './pages/recipePage/recipe';
import WritingPage from './pages/writingPage/writing';
import StartPage from './pages/startPage/start';
import Search from './pages/search/search';
import SearchResultPage from './pages/search/search_result';
import { data } from "./send_data";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StartPage />}></Route>
        <Route path='/member' element={<MemberPage />}></Route>
        <Route path='/member/signup' element={<SignUp />}></Route>
        <Route path='/member/login' element={<LoginPage />}></Route>
        <Route 
          path='/survey/:id' 
          element={<SurveyPage data={data} />}>
        </Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route 
          path='/recipe/:id' 
          element={<RecipePage data={data} />}>
        </Route>
        <Route path='/writing' element={<WritingPage />}></Route>
        <Route path='/my' element={<MyPage />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/search/result' element={<SearchResultPage />}></Route>
      </Routes>
    </div>
   
  );
}

export default App;
