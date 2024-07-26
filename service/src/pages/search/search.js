import React from 'react';
import styled from 'styled-components';
import './search.css';


const SearchForm = () => {
  return (
    <div>
      <div>
        <p>재료</p>
        <input type="text" id="searchform" placeholder="재료를 검색하세요" />
      </div>

      <div>
        <p>운동목적</p>
        <div className="capsule-container">
          <div className="capsule">근육키우기</div>
          <div className="capsule">급찐급빠</div>
          <div className="capsule">식단조절</div>
          <div className="capsule">식욕방지</div>
        </div>
      </div>

      <div>
        <p>카테고리</p>
        <div className="capsule-container">
          <div className="capsule">초스피드</div>
          <div className="capsule">일상</div>
          <div className="capsule">해장</div>
          <div className="capsule">안주</div>
          <div className="capsule">다이어트</div>
          <div className="capsule">간식</div>
          <div className="capsule">글로벌</div>
          <div className="capsule">기념일</div>
          <div className="capsule">집들이</div>
        </div>
      </div>

      <div>
        <p>가격</p>
        <div className="capsule-container">
          <div className="capsule">5,000원 미만</div>
          <div className="capsule">10,000원 미만</div>
          <div className="capsule">30,000원 미만</div>
          <div className="capsule">50,000원 미만</div>
          <div className="capsule">50,000원 이상</div>
        </div>
      </div>

      <footer>
        <input type="submit" id="search_button" value="검색하기" />
      </footer>
    </div>
  );
};

export default SearchForm;