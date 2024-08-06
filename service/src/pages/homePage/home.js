import React, { useState, useEffect } from "react";
import homeImg from "./home.png";
import profileImg from "./profile.png";
import writeImg from "./write.png";
import searchImg from "./search.png";
import profileimgImg from "./logo.png";
import { Link } from 'react-router-dom';
import * as S from "./home.style";

function HomePage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/homepage', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Fetched data:', data); // 서버에서 반환된 데이터 로그

        // 필요한 데이터를 cards 형식에 맞게 변환합니다.
        const transformedData = data.map(item => ({
          id: item.recipeId,
          nickname: item.nickname,
          recipeName: item.title,
          image: profileimgImg // 이미지가 없으므로 예시 이미지 사용
        }));
        console.log('Transformed data:', transformedData); // 변환된 데이터 로그
        setCards(transformedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <S.Loading>Loading...</S.Loading>;
  }

  if (error) {
    return <S.Error>Error: {error.message}</S.Error>;
  }

  return (
    <S.Container2>
      <S.TitleBoxHome>
        <S.FtBig>나의 취향저격 레시피🔫</S.FtBig>
      </S.TitleBoxHome>
      <S.SearchLink to='/search'>
        <S.Search>
          <S.SearchImg src={searchImg} />
          <Link to='/search' style={{textDecoration: 'none'}}><S.SearchBox>레시피 검색하기</S.SearchBox></Link>
        </S.Search>
      </S.SearchLink>
      <S.Container3>
        {cards.map(card => (
          <Card 
            key={card.id}
            id={card.id}
            nickname={card.nickname} 
            recipeName={card.recipeName} 
            image={card.image} 
          />
        ))}
      </S.Container3>
      <S.Nav>
        <S.NavLink to='/home'>
          <S.NavDiv>
            <S.NavImg src={homeImg} alt="홈" />
            <S.NavP>홈</S.NavP>
          </S.NavDiv>
        </S.NavLink>
        <S.NavLink to='/my'>
          <S.NavDiv>
            <S.NavImg src={profileImg} alt="MY" />
            <S.NavP>MY</S.NavP>
          </S.NavDiv>
        </S.NavLink>
        <S.NavLink to='/write'>
          <S.NavDiv>
            <S.NavImg src={writeImg} alt="글쓰기" />
            <S.NavP>글쓰기</S.NavP>
          </S.NavDiv>
        </S.NavLink>
      </S.Nav>
    </S.Container2>
  );
}

function Card({ id, nickname, recipeName, image }) {
  return (
    <Link to={`/recipe/${id}`} style={{ textDecoration: 'none' }}>
      <S.RecipeCard>
        <S.Recipe>
          <S.RecipeProfile>
            <S.ProfileImg src={image} />
            <S.FtRecipe>{nickname}</S.FtRecipe>
          </S.RecipeProfile>
          <S.RecipeImg src={image} />
          <S.RecipeName>
            <S.FtRecipeSmall>{recipeName}</S.FtRecipeSmall>
          </S.RecipeName>
        </S.Recipe>
      </S.RecipeCard>
    </Link>
  );
}

export default HomePage;
