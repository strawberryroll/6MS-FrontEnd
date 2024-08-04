import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MemberPage from './pages/memberPage/member';
import SurveyPage from './pages/surveyPage/survey';
import RecipePage from './pages/recipePage/recipe';
import { data } from "./data";

import MyPage from './pages/myPage/mypage';
import SignUp from './pages/memberPage/signup';
import Search from './pages/search/search';
import SearchResult from './pages/search/search_result';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RecipePage />}></Route>
        {/* <Route path='/' element={<StartPage />}></Route> */}
        <Route path='/member' element={<MemberPage />}></Route>
        <Route 
          path='/survey/:id' 
          element={<SurveyPage data={data} />}></Route>
        <Route 
          path='/recipe/:id' 
          element={<RecipePage data={data} />}></Route>

        <Route path='/mypage' element={<MyPage />}></Route>
        <Route path='/member/signup' element={<SignUp />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='search/search_result' element={<SearchResult />}></Route>

      </Routes>


    </div>
   
  );
}

export default App;
