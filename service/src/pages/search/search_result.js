import React from 'react';
import styled from 'styled-components';
import './search_result.css'

import searchIcon from './search_result_icon.png';
import searchInputIcon from './reading_glass.png';
import profileIcon from './profile.png';
import tofuRecipeImage from './Tofu.png';
import eggFriedRiceImage from './EggFriedRice.png';
import homeIconOn from './nav_home_on.png';
import myIconOff from './nav_my_off.png';
import writeIconOff from './nav_write_off.png';
import { useNavigßate } from 'react-router-dom';
import { useState } from 'react';

import icon from './cancle.png';

const SearchResultPage = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([
        
      ]);

      const moveSearch = () => {

      };
      const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(prevState => !prevState);
  };
    
  const SearchResult = () => {
    return (
        <div className="result_page">
      <header id="result_header">
        <p>검색결과 <img src={searchIcon} alt="" style={{ width: '33px', height: '33px' }} /></p>
      </header>

      <div id="search">
        <img src={searchInputIcon} alt="" />
        <input onClick={toggleComponent}  type="text" placeholder="레시피 검색하기" />
      </div>

      <main className="container">
      {data.map((item, index) => (
          <div className="box">
          <div className="profile">
            <img src={item.proflImage} alt="" />
            <span>{item.nickname}</span>
          </div>
          <div className="image">
            <img src={item.image} alt="" />
          </div>
          <div className="search_result_title">{item.title}</div>
        </div>
        ))}
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
  }

  const SearchForm = () => {
    const [searchInput, setSearchInput] = useState('');

    const [selectedCapsule, setSelectedCapsule] = useState({
        목적: '',
        카테고리: '',
        가격: ''
      });

      const handleCapsuleClick = (category, text) => {
        setSelectedCapsule(prevState => ({
          ...prevState,
          [category]: prevState[category] === text ? '' : text
        }));
      };
    
      const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const searchData = {
          searchInput,
          ...selectedCapsule
        };
        console.log(searchData);
    
        try {
        //TODO 서버 연결하기
        //   const response = await fetch('https://api.example.com/search', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(searchData)
        //   });
    
        //   if (!response.ok) {
        //     throw new Error('Network response was not ok');
        //   }
          //const result = await response.json();


          const result = [{ nickname: '9단주부맘', proflImage : profileIcon, image: tofuRecipeImage , title: '두부조림 황금레시피' },
          { nickname: '초보주부', proflImage : profileIcon, image: eggFriedRiceImage , title: '계란볶음밥' },
          { nickname: '초보주부', proflImage : profileIcon, image: eggFriedRiceImage , title: '계란볶음밥' },]
          setData(result);
          toggleComponent();
            } catch (error) {
                alert("검색에 실패하였습니다.");
        }
      };
    
    

      return (
        <div className="search_container">
            <header id="search_top">
          <img onClick={toggleComponent} src= { icon } style={ { width : "24px", height : "24px" , margin: "18px 0 18px 0" } } alt="Cancel Icon" />
        </header>
          <div>
            <p>재료</p>
            <input type="text" id="searchform" placeholder="재료를 검색하세요" value={searchInput}
          onChange={handleSearchInputChange}/>
          </div>
    
          <div>
            <p>운동목적</p>
            <div className="capsule-container">
              {['근육키우기', '급찐급빠', '식단조절', '식욕방지'].map(text => (
                <div
                  key={text}
                  className={`capsule ${selectedCapsule.목적 === text ? 'clicked' : ''}`}
                  onClick={() => handleCapsuleClick('목적', text)}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
    
          <div>
            <p>카테고리</p>
            <div className="capsule-container">
              {['초스피드', '일상', '해장', '안주', '다이어트', '간식', '글로벌', '기념일', '집들이'].map(text => (
                <div
                  key={text}
                  className={`capsule ${selectedCapsule.카테고리 === text ? 'clicked' : ''}`}
                  onClick={() => handleCapsuleClick('카테고리', text)}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
    
          <div>
            <p>가격</p>
            <div className="capsule-container">
              {['5,000원 미만', '10,000원 미만', '30,000원 미만', '50,000원 미만', '50,000원 이상'].map(text => (
                <div
                  key={text}
                  className={`capsule ${selectedCapsule.가격 === text ? 'clicked' : ''}`}
                  onClick={() => handleCapsuleClick('가격', text)}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
    
          <footer>
            <input type="submit" id="search_button" value="검색하기" onClick={handleSubmit} />
          </footer>
        </div>
      );
};

  return (
    <div>
      {!showComponent && <SearchResult/>}
      <div>
          {showComponent && <SearchForm />}
        </div>
    </div>
    
  );
};

export default SearchResultPage;