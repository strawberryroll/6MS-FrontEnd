import React from 'react';

import searchIcon from './search_result_icon.png';
import searchInputIcon from './reading_glass.png';
import profileIcon from './profile.png';
import tofuRecipeImage from './Tofu.png';
import eggFriedRiceImage from './EggFriedRice.png';
import homeIconOn from './nav_home_on.png';
import myIconOff from './nav_my_off.png';
import writeIconOff from './nav_write_off.png';
import { useState } from 'react';

import icon from './cancle.png';
import styled from '@emotion/styled';

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
      <ResultHeader id="result_header">
        <p>검색결과 <img src={searchIcon} alt="" style={{ width: '33px', height: '33px' }} /></p>
      </ResultHeader>

      <Search>
        <SearchImg src={searchInputIcon} alt="" />
        <SearchResultInput onClick={toggleComponent}  type="text" placeholder="레시피 검색하기" />
      </Search>

      <MainContainer>
      {data.map((item, index) => (
          <RecipeBox >
          <Profile >
            <ProfileImage src={item.proflImage} alt="" />
            <span>{item.nickname}</span>
          </Profile>
          <ImageContainer >
            <StyledImage src={item.image} alt="" />
          </ImageContainer>
          <SearchResultTitle>{item.title}</SearchResultTitle>
        </RecipeBox>
        ))}
      </MainContainer>

      <Nav>
            <NavItem>
              <img src={homeIconOn} alt="" style={{ width: '20px', marginBottom: '2px' }} />
              <FocusedText>홈</FocusedText>
            </NavItem>
            <NavItem>
              <img src={myIconOff} alt="" style={{ width: '20px', marginBottom: '2px' }} />
              <NavLink>MY</NavLink>
            </NavItem>
            <NavItem>
              <img src={writeIconOff} alt="" style={{ width: '20px', marginBottom: '2px' }} />
              <NavLink>글쓰기</NavLink>
            </NavItem>
          </Nav>
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
        <SearchContainer>
    <Header>
      <img onClick={toggleComponent} src={icon} style={{ width: "24px", height: "24px", margin: "18px 0" }} alt="Cancel Icon" />
    </Header>
    <div>
      <CategoryTitle>재료</CategoryTitle>
      <SearchInput type="text" placeholder="재료를 검색하세요" value={searchInput} onChange={handleSearchInputChange} />
    </div>

    <div>
      <CategoryTitle>운동목적</CategoryTitle>
      <CapsuleContainer>
        {['근육키우기', '급찐급빠', '식단조절', '식욕방지'].map(text => (
          <Capsule key={text} className={selectedCapsule.목적 === text ? 'clicked' : ''} onClick={() => handleCapsuleClick('목적', text)}>
            {text}
          </Capsule>
        ))}
      </CapsuleContainer>
    </div>

    <div>
      <CategoryTitle>카테고리</CategoryTitle>
      <CapsuleContainer>
        {['초스피드', '일상', '해장', '안주', '다이어트', '간식', '글로벌', '기념일', '집들이'].map(text => (
          <Capsule key={text} className={selectedCapsule.카테고리 === text ? 'clicked' : ''} onClick={() => handleCapsuleClick('카테고리', text)}>
            {text}
          </Capsule>
        ))}
      </CapsuleContainer>
    </div>

    <div>
      <CategoryTitle>가격</CategoryTitle>
      <CapsuleContainer>
        {['5,000원 미만', '10,000원 미만', '30,000원 미만', '50,000원 미만', '50,000원 이상'].map(text => (
          <Capsule key={text} className={selectedCapsule.가격 === text ? 'clicked' : ''} onClick={() => handleCapsuleClick('가격', text)}>
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