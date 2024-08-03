import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './mypage.css';
import profileIcon from './profile.png';
import tofuRecipeImage from './Tofu.png';
import eggFriedRiceImage from './EggFriedRice.png';
import homeIconOff from './nav_home_off.png';
import myIconOn from './nav_my_on.png';
import writeIconOff from './nav_write_off.png';

const mockApiUrl = 'https://jsonplaceholder.typicode.com/posts'; // 이 부분을 나중에 실제 API URL로 대체하세요

const MyPage = () => {
  const [userName, setUserName] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [myPicks, setMyPicks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(mockApiUrl); // 사용자 정보를 가져오는 API
        const recipeResponse = await axios.get(mockApiUrl); // 요리 정보를 가져오는 API

        // 실제 응답 데이터 구조에 맞게 데이터를 변환합니다
        const userData = {
          userName: '마피'
        };

        const recipeData = {
          myRecipes: [
            {
              id: 1,
              userName: userData.userName,
              profileImage: profileIcon,
              recipeImage: tofuRecipeImage,
              title: '두부조림 황금레시피'
            },
            {
              id: 2,
              userName: userData.userName,
              profileImage: profileIcon,
              recipeImage: eggFriedRiceImage,
              title: '계란볶음밥'
            },
            {
              id: 3,
              userName: userData.userName,
              profileImage: profileIcon,
              recipeImage: eggFriedRiceImage,
              title: '계란볶음밥'
            }
          ],
          myPicks: [
            {
              id: 1,
              userName: '9단주부맘',
              profileImage: profileIcon,
              recipeImage: tofuRecipeImage,
              title: '두부조림 황금레시피'
            },
            {
              id: 2,
              userName: '초보주부',
              profileImage: profileIcon,
              recipeImage: eggFriedRiceImage,
              title: '계란볶음밥'
            },
            {
              id: 3,
              userName: '초보주부',
              profileImage: profileIcon,
              recipeImage: eggFriedRiceImage,
              title: '계란볶음밥'
            }
          ]
        };

        setUserName(userData.userName);
        setMyRecipes(recipeData.myRecipes);
        setMyPicks(recipeData.myPicks);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="my-page">
      <header id="mypage_header">
        <img id="my_profile" src={profileIcon} alt="Profile" />
        <p id="my_id">{userName}님</p>
        <img id="my_edit" src={editIcon} alt="Edit" />
      </header>

      <p className="category">나의 요리 경력</p>
      <div className="mypage_container">
        {myRecipes.map(recipe => (
          <div className="mypage_box" key={recipe.id}>
            <div className="mypage_profile">
              <img src={recipe.profileImage} alt="Profile" />
              <span>{recipe.userName}님</span>
            </div>
            <div className="mypage_image">
              <img src={recipe.recipeImage} alt={recipe.title} />
            </div>
            <div className="mypage_title">{recipe.title}</div>
          </div>
        ))}
      </div>

      <p className="category">나의 pick</p>
      <section className="mypage_container">
        {myPicks.map(pick => (
          <div className="mypage_box" key={pick.id}>
            <div className="mypage_profile">
              <img src={pick.profileImage} alt="Profile" />
              <span>{pick.userName}</span>
            </div>
            <div className="mypage_image">
              <img src={pick.recipeImage} alt={pick.title} />
            </div>
            <div className="mypage_title">{pick.title}</div>
          </div>
        ))}
      </section>

      <nav>
        <div>
          <img src={homeIconOff} alt="홈" />
          <p>홈</p>
        </div>
        <div>
          <img src={myIconOn} alt="MY" />
          <p id="focused">MY</p>
        </div>
        <div>
          <img src={writeIconOff} alt="글쓰기" />
          <p id="search_result_write">글쓰기</p>
        </div>
      </nav>
    </div>
  );
};

export default MyPage;