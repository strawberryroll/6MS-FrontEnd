import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/home';
import MemberPage from './pages/memberPage/member';
import MyPage from './pages/myPage/my';
import SurveyPage from './pages/surveyPage/survey';
import RecipePage from './pages/recipePage/recipe';
import WritingPage from './pages/writingPage/writing';
import StartPage from './pages/startPage/start';
import SignUp from './pages/memberPage/signup';
import Search from './pages/search/search';
import { data } from "./send_data";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StartPage />}></Route>
        <Route path='/member' element={<MemberPage />}></Route>
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
        <Route path='/member/signup' element={<SignUp />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </div>
   
  );
}

export default App;
