import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import searchIcon from './images/search_magnifier.png';
import searchInputIcon from './images/search_result.png';
import profileIcon from './images/profile.png';
import tofuRecipeImage from './images/tofuImage.png';
import eggFriedRiceImage from './images/eggFriedRiceImage.png';
import NavBar from '../../components/navbarUnit/navbar';
// import homeIconOn from './images/네브바_홈_on.png';
// import myIconOff from './images/네브바_마이_off.png';
// import writeIconOff from './images/네브바_글쓰기_off.png';
import icon from './images/cancle.png';



const Header = styled.header`
  text-align: left;
`;


const ResultHeader = styled.header`
  font-size: 32px;
  font-weight: 500;
  display: flex;
  flex-wrap: wrap;
`;

const CategoryTitle = styled.p`
    text-align: left;
    font-size: 10px;
    color: #757575;
`;

const Search = styled.div`
  display: flex;
  gap: 15px
  img {
    width: 24px;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    color: #757575;
    font-size: 16px;
    border: none;
    box-sizing: border-box;
  }
  ;
`;

const SearchImg = styled.img`
  width: 24px
`;

const SearchResultInput =  styled.input`
  padding: 0px 10px;
  width: 100%;
  box-sizing: border-box;
  color: #757575;
  font-size: 16px;
  border: none;
  box-sizing: border-box;
`;

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px 25px;
  justify-content: flex-start;
`;

const RecipeBox = styled.div`
  width: 150px;
  height: 220px;
  border: 0.7px solid #ff640d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 18px;
  box-sizing: border-box;
`;


const Profile = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;
  gap: 5px;
  padding: 2.5px 10px;
  align-items: center;
  box-sizing: border-box;
`;


const ProfileImage = styled.img`
  width: 21px;
  height: 21px;
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchResultTitle = styled.div`
  text-align: left;
  font-size: 8px;
  padding: 15px 10px;
  box-sizing: border-box;
`;

// 이미지 컴포넌트
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// 네비게이션 바 스타일
const Nav = styled.nav`
  background-color: white;
  width: 100vw; /* 뷰포트의 전체 너비로 설정 */
  height: 51px;
  display: flex;
  border-top: 0.5px solid #FFE1D1;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 100px; 
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavLink = styled.p`
  font-size: 10px;
  margin: 0;
`;

const FocusedText = styled(NavLink)`
  color: #ff640d;
`;

const SearchContainer = styled.div`
  p {
    font-size: 10px;
    color: #757575;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border: 1px solid #FF640D;
  border-radius: 8px;
  padding: 10px;
  font-size: 8px;
  color: #757575;
  box-sizing: border-box;
`;

const CapsuleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Capsule = styled.div`
  background-color: #FFE0CF;
  color: #3D3D3D;
  font-size: 9px;
  padding: 4px;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;

  &.clicked {
    border: 2px solid orange;
  }
`;

const Footer = styled.footer`
  margin-top: 27px;
`;

const SearchButton = styled.input`
  width: 100%;
  background-color: #FF640D;
  border-radius: 8px;
  border: none;
  height: 30px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  padding: 0;
`;


const SearchForm = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [ingredientList, setIngredientList] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [selectedCapsule, setSelectedCapsule] = useState({
      purpose: '',
      preference: '',
      cost: ''
    });
    const [showComponent, setShowComponent] = useState(false);

    const toggleComponent = () => {
      setShowComponent(prevState => !prevState);
    };

    const handleCapsuleClick = (category, text) => {
      setSelectedCapsule(prevState => ({
        ...prevState,
        [category]: prevState[category] === text ? '' : text
      }));
    };

    const handleSearchInputChange = (e) => {
      const input = e.target.value;
      setSearchInput(input);
      setIngredientList(input.split(',').map(item => item.trim()));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const searchData = {
        ingredientList,
        ...selectedCapsule
      };
      console.log("searchData:", searchData);
      console.log("searchDatajson:", JSON.stringify(searchData));
    
      try {
        // TODO 서버 연결하기
        const response = await fetch('/api/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(searchData)
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const result = await response.json();
        console.log("Result from API:", result);
        console.log("Raw response:", response);
    
        setData(result);
        toggleComponent();
        navigate('/search/result', { state: { data: result } });
      } catch (error) {
        console.error("Error during fetch:", error);
        alert("검색에 실패하였습니다.");
      }
    };


    return (
      <SearchContainer>
  <Header>
    <img onClick={toggleComponent} src={icon} style={{ width: "24px", height: "24px", margin: "18px 0" }} alt="Cancel Icon" />
  </Header>
  <div>
    <CategoryTitle>재료</CategoryTitle>
    <SearchInput type="text" placeholder="재료를 검색하세요" value={ingredientList} onChange={handleSearchInputChange} />
  </div>

  <div>
    <CategoryTitle>운동목적</CategoryTitle>
    <CapsuleContainer>
      {['근육키우기', '급찐급빠', '식단조절', '식욕방지'].map(text => (
        <Capsule key={text} className={selectedCapsule.purpose === text ? 'clicked' : ''} onClick={() => handleCapsuleClick('purpose', text)}>
          {text}
        </Capsule>
      ))}
    </CapsuleContainer>
  </div>

  <div>
    <CategoryTitle>카테고리</CategoryTitle>
    <CapsuleContainer>
      {['초스피드', '일상', '해장', '안주', '다이어트', '간식', '글로벌', '기념일', '집들이'].map(text => (
        <Capsule key={text} className={selectedCapsule.preference === text ? 'clicked' : ''} onClick={() => handleCapsuleClick('preference', text)}>
          {text}
        </Capsule>
      ))}
    </CapsuleContainer>
  </div>

  <div>
    <CategoryTitle>가격</CategoryTitle>
    <CapsuleContainer>
      {['5,000원 미만', '10,000원 미만', '30,000원 미만', '50,000원 미만', '50,000원 이상'].map(text => (
        <Capsule key={text} className={selectedCapsule.cost === text ? 'clicked' : ''} onClick={() => handleCapsuleClick('cost', text)}>
          {text}
        </Capsule>
      ))}
    </CapsuleContainer>
  </div>

  <Footer>
    <SearchButton type="submit" value="검색하기" onClick={handleSubmit} />
  </Footer>
</SearchContainer>
    );
};

export default SearchForm;