import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import searchIcon from './images/search_magnifier.png';
import searchInputIcon from './images/search_result.png';
import profileIcon from './images/profile.png';
import NavBar from '../../components/navbarUnit/navbar';
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
  gap: 15px;
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
`;

const SearchImg = styled.img`
  width: 24px;
`;

const SearchResultInput = styled.input`
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

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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

const SearchResult = () => {
  const location = useLocation();
  const { data } = location.state || { data: [] };

  return (
    <div className="result_page">
      <ResultHeader id="result_header">
        <p>
          검색결과 <img src={searchIcon} alt="" style={{ width: '33px', height: '33px' }} />
        </p>
      </ResultHeader>

      <Search>
        <SearchImg src={searchInputIcon} alt="" />
        <Link to='/search' style={{ textDecoration: 'none' }}><SearchResultInput type="text" placeholder="레시피 검색하기" /></Link>
      </Search>

      <MainContainer>
        {data.map((item, index) => (
          <Link to={`/recipe/${item.recipeId}`} key={index} style={{ textDecoration: 'none' }}>
            <RecipeBox>
              <Profile>
                <ProfileImage src={profileIcon} alt="" />
                <span>{item.nickname}</span>
              </Profile>
              <ImageContainer>
                {/* <StyledImage src={item.introUrl} alt="" /> */}
                <StyledImage src="./images/logo.png" alt="" />
              </ImageContainer>
              <SearchResultTitle>{item.title}</SearchResultTitle>
            </RecipeBox>
          </Link>
        ))}
      </MainContainer>

      <NavBar currentPage="home" />
    </div>
  );
};

export default SearchResult;
