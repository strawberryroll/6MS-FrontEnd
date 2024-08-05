import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import profileIcon from './images/profile.png';
import editIcon from './images/edit.png';
import tofuRecipeImage from './images/tofuImage.png';
import eggFriedRiceImage from './images/eggFriedRiceImage.png';
import homeIconOff from './images/navHome_off.png';
import myIconOn from './images/navMy_on.png';
import writeIconOff from './images/navWrite_off.png';
import NavBar from '../../components/navbarUnit/navbar';
import { response_data } from '../../response_data';

const mockApiUrl = 'https://jsonplaceholder.typicode.com/posts';

const MyPageHeader = styled.header`
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  gap: 16px;
  padding: 30px 0 0px 0;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const UserName = styled.p`
  text-align: left;
  color: #111111;
  flex-grow: 1;
  margin: 0;
  font-size: 32px;
  font-weight: 500;
`;

const CategoryTitle = styled.p`
  text-align: left;
  font-size: 24px;
  font-weight: 500;
  margin-top: 36px;
`;

const MyPageContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 25px;
  box-sizing: border-box;
`;

const MyPageBox = styled.div`
  flex: 0 0 auto;
  width: 150px;
  height: 220px;
  border: 0.7px solid #ff640d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;
  padding: 2.5px 10px;
  align-items: center;
  box-sizing: border-box;
`;

const BoxProfile = styled.img`
  width: 21px;
  height: 21px;
`;

const RecipeImage = styled.img`
  width: 150px;
  height: 150px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;

const RecipeTitle = styled.p`
  text-align: left;
  font-size: 8px;
  padding: 7px 10px;
  box-sizing: border-box;
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

const MyPage = () => {
  const [userName, setUserName] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [myPicks, setMyPicks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const userResponse = await axios.get(mockApiUrl);
        const recipeResponse = await axios.get(`/api/mypage`);

        const userData = { userName: response_data.user.nickname };

        // const recipeData = {
        //   myRecipes: [
        //     {
        //       id: 1,
        //       userName: userData.userName,
        //       profileImage: profileIcon,
        //       recipeImage: tofuRecipeImage,
        //       title: '두부조림 황금레시피'
        //     },
        //     {
        //       id: 2,
        //       userName: userData.userName,
        //       profileImage: profileIcon,
        //       recipeImage: eggFriedRiceImage,
        //       title: '계란볶음밥'
        //     },
        //     {
        //         id: 3,
        //         userName: userData.userName,
        //         profileImage: profileIcon,
        //         recipeImage: eggFriedRiceImage,
        //         title: '계란볶음밥'
        //       }
        //   ],
        //   myPicks: [
        //     {
        //       id: 1,
        //       userName: '9단주부맘',
        //       profileImage: profileIcon,
        //       recipeImage: tofuRecipeImage,
        //       title: '두부조림 황금레시피'
        //     }
        //   ]
        // };

        setUserName(userData.userName);
        setMyRecipes(recipeResponse.data);
        // setMyRecipes(recipeData.myRecipes);
        // setMyPicks(recipeData.myPicks);
        setLoading(false);
        console.log("get:", recipeResponse.data);
        // console.log("myRecipes :", myRecipes);

      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-page">
      <MyPageHeader>
        <ProfileImage src={profileIcon} alt="Profile" />
        <UserName>{response_data.user.nickname}님</UserName>
      </MyPageHeader>

      <CategoryTitle>나의 요리 경력</CategoryTitle>
      <MyPageContainer>
        {myRecipes?.map(recipe => (
          <MyPageBox key={recipe.recipeId}>
            <ProfileDetails>
              <BoxProfile src={profileIcon} alt="Profile" />
              <span style={{padding : '0px 9px'}}>{recipe.nickname}님</span>
            </ProfileDetails>
            <RecipeImage src={recipe.recipeImage} alt={recipe.title} />
            <RecipeTitle>{recipe.title}</RecipeTitle>
          </MyPageBox>
        ))}
      </MyPageContainer>

      <CategoryTitle>나의 pick</CategoryTitle>
      <MyPageContainer>
        {myPicks.map(pick => (
          <MyPageBox key={pick.id}>
            <ProfileDetails>
              <BoxProfile src={profileIcon} alt="Profile" />
              <span style={{padding : '0px 9px'}}>{pick.nickname}</span>
            </ProfileDetails>
            <RecipeImage src={pick.recipeImage} alt={pick.title} />
            <RecipeTitle>{pick.title}</RecipeTitle>
          </MyPageBox>
        ))}
      </MyPageContainer>

      {/* <Nav>
            <NavItem>
              <img src={homeIconOff} alt="" style={{ width: '20px', marginBottom: '2px' }} />
              <NavLink>홈</NavLink>
            </NavItem>
            <NavItem>
              <img src={myIconOn} alt="" style={{ width: '20px', marginBottom: '2px' }} />
              <FocusedText>MY</FocusedText>
            </NavItem>
            <NavItem>
              <img src={writeIconOff} alt="" style={{ width: '20px', marginBottom: '2px' }} />
              <NavLink>글쓰기</NavLink>
            </NavItem>
          </Nav> */}

        <NavBar currentPage="my" />
    </div>
  );
};

export default MyPage;