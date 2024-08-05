// import React, { useState } from "react";
// import homeImg from "./home.png";
// import profileImg from "./profile.png";
// import writeImg from "./write.png";
// import searchImg from "./search.png";
// import profileimgImg from "./profileimg.png";
// import * as S from "./home.style";

// function HomePage() {
//   const [cards, setCards] = useState([
//     { id: 1, nickname: '닉네임1', recipeName: '요리 이름1', image: profileimgImg },
//     { id: 2, nickname: '닉네임2', recipeName: '요리 이름2', image: profileimgImg },
//     { id: 3, nickname: '닉네임3', recipeName: '요리 이름3', image: profileimgImg },
//     { id: 4, nickname: '닉네임4', recipeName: '요리 이름4', image: profileimgImg },
//     { id: 5, nickname: '닉네임5', recipeName: '요리 이름5', image: profileimgImg },
//     { id: 6, nickname: '닉네임6', recipeName: '요리 이름6', image: profileimgImg },
//     { id: 7, nickname: '닉네임7', recipeName: '요리 이름7', image: profileimgImg }
//   ]);

//   return (
//     <S.Container2>
//       <S.TitleBoxHome>
//         <S.FtBig>나의 취향저격 레시피🔫</S.FtBig>
//       </S.TitleBoxHome>
//       <S.SearchLink to='/search'>
//         <S.Search>
//           <S.SearchImg src={searchImg} />
//           <S.SearchBox>레시피 검색하기</S.SearchBox>
//         </S.Search>
//       </S.SearchLink>
//       <S.Container3>
//         {cards.map(card => (
//           <Card 
//             key={card.id}
//             nickname={card.nickname} 
//             recipeName={card.recipeName} 
//             image={card.image} 
//           />
//         ))}
//       </S.Container3>
//       <S.Nav>
//         <S.NavLink to='/home'>
//           <S.NavDiv>
//             <S.NavImg src={homeImg} alt="홈" />
//             <S.NavP>홈</S.NavP>
//           </S.NavDiv>
//         </S.NavLink>
//         <S.NavLink to='/my'>
//           <S.NavDiv>
//             <S.NavImg src={profileImg} alt="MY" />
//             <S.NavP>MY</S.NavP>
//           </S.NavDiv>
//         </S.NavLink>
//         <S.NavLink to='/write'>
//           <S.NavDiv>
//             <S.NavImg src={writeImg} alt="글쓰기" />
//             <S.NavP>글쓰기</S.NavP>
//           </S.NavDiv>
//         </S.NavLink>
//       </S.Nav>
//     </S.Container2>
//   );
// }

// function Card({ nickname, recipeName, image }) {
//   return (
//     <S.RecipeCard to='#'>
//       <S.Recipe>
//         <S.RecipeProfile>
//           <S.ProfileImg src={image} />
//           <S.FtRecipe>{nickname}</S.FtRecipe>
//         </S.RecipeProfile>
//         <S.RecipeImg src={image} />
//         <S.RecipeName>
//           <S.FtRecipeSmall>{recipeName}</S.FtRecipeSmall>
//         </S.RecipeName>
//       </S.Recipe>
//     </S.RecipeCard>
//   );
// }

// export default HomePage;

import React, { useState, useEffect } from "react";
import homeImg from "./home.png";
import profileImg from "./profile.png";
import writeImg from "./write.png";
import searchImg from "./search.png";
import profileimgImg from "./profileimg.png";
import * as S from "./home.style";

function HomePage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://13.124.20.140:8080/homepage', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // 필요한 데이터를 cards 형식에 맞게 변환합니다.
        const transformedData = [
          {
            id: data.recipeId,
            nickname: data.nickname,
            recipeName: data.title,
            image: profileimgImg // 이미지가 없으므로 예시 이미지 사용
          }
        ];
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
          <S.SearchBox>레시피 검색하기</S.SearchBox>
        </S.Search>
      </S.SearchLink>
      <S.Container3>
        {cards.map(card => (
          <Card 
            key={card.id}
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

function Card({ nickname, recipeName, image }) {
  return (
    <S.RecipeCard to='#'>
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
  );
}

export default HomePage;
