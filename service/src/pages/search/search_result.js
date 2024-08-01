import React from 'react';
import styled from 'styled-components';
import './search_result.css'

import searchIcon from './검색결과_돋보기.png';
import searchInputIcon from './검색결과_search.png';
import profileIcon from './profile.png';
import tofuRecipeImage from './두부조림_썸네일.png';
import eggFriedRiceImage from './계란볶음밥_썸네일.png';
import homeIconOn from './네브바_홈_on.png';
import myIconOff from './네브바_마이_off.png';
import writeIconOff from './네브바_글쓰기_off.png';

const SearchResultPage = () => {
  return (
    <div>
      <header id="result_header">
        <p>검색결과 <img src={searchIcon} alt="" style={{ width: '33px', height: '33px' }} /></p>
      </header>

      <div id="search">
        <img src={searchInputIcon} alt="" />
        <input type="text" placeholder="레시피 검색하기" />
      </div>

      <main className="container">
        <div className="box">
          <div className="profile">
            <img src={profileIcon} alt="" />
            <span>9단주부맘</span>
          </div>
          <div className="image">
            <img src={tofuRecipeImage} alt="" />
          </div>
          <div className="search_result_title">두부조림 황금레시피</div>
        </div>

        <div className="box">
          <div className="profile">
            <img src={profileIcon} alt="" />
            <span>초보주부</span>
          </div>
          <div className="image">
            <img src={eggFriedRiceImage} alt="" />
          </div>
          <div className="search_result_title">계란볶음밥</div>
        </div>

        <div className="box">
          <div className="profile">
            <img src={profileIcon} alt="" />
            <span>초보주부</span>
          </div>
          <div className="image">
            <img src={eggFriedRiceImage} alt="" />
          </div>
          <div className="search_result_title">계란볶음밥</div>
        </div>
      </main>

      <nav>
        <div>
          <img src={homeIconOn} alt="" />
          <p id="focused">홈</p>
        </div>
        <div>
          <img src={myIconOff} alt="" />
          <p>MY</p>
        </div>
        <div>
          <img src={writeIconOff} alt="" />
          <p id="search_result_write">글쓰기</p>
        </div>
      </nav>
    </div>
  );
};

export default SearchResultPage;