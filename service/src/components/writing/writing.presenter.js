import * as S from "./writing.styles";
import { data } from "../../data";
import { useState } from "react";

export default function WritingPresenterPage() {

  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleDifficultyClick = (level) => {
    setSelectedDifficulty(level);
  };
  const handlePriceClick = (price) => {
    setSelectedPrice(price);
  };


  return (
    <S.Wrapper>
      <S.CloseBox>
        <S.Icon src="/images/close.png" style={{ marginRight: "auto" }} />
      </S.CloseBox>
            
      <S.Title style={{ padding: '5px', fontSize: '32px' }}>user님의 레시피를</S.Title>
      <S.Title style={{ padding: 0, fontSize: '32px', marginBottom: '25px'}}> 소개해주세요! </S.Title>
      <S.TitleInput placeholder="제목을 작성해주세요" />
      <S.ImageUpload>
        <S.Icon src="/images/blackphoto.png" />
      </S.ImageUpload>
      <S.Title style={{ fontSize: '10px', color: '#FF640D', margin: 0, padding: 0}}>▲ 완성본 사진을 첨부해주세요</S.Title>
      
      <S.UserBox>
        <S.Icon src="/images/user.png" />
        <span>user</span>
      </S.UserBox>
      <S.TextArea placeholder="자기소개 한 마디를 작성해주세요"></S.TextArea>
      
      <S.Info>
      <S.InputWrapper>
            <S.Label>메뉴이름</S.Label>
            <S.Input style={{width: "40%"}} placeholder="메뉴의 이름을 입력해주세요" />
        </S.InputWrapper>
        <S.Difficulty>
          <S.Label>난이도</S.Label>
          <S.DifficultyLevels>
            {[1, 2, 3, 4, 5].map((level) => (
              <S.DifficultyLevel 
                key={level} 
                onClick={() => handleDifficultyClick(level)}
                isSelected={selectedDifficulty === level}
              >
                {level}
              </S.DifficultyLevel>
            ))}
        </S.DifficultyLevels>
        </S.Difficulty>
        <S.InputWrapper>
            <S.Label>기준인분</S.Label>
            <S.Input placeholder="기준인분을 입력해주세요" />
        </S.InputWrapper>
        <S.Price>
            <S.Label>가격</S.Label>
            <S.PriceOptions>
            {["5,000원 미만", "10,000원 미만", "30,000원 미만", "50,000원 미만", "50,000원 이상"].map((price) => (
                <S.PriceOption 
                key={price} 
                onClick={() => handlePriceClick(price)}
                isSelected={selectedPrice === price}
                >
                  {price}
                </S.PriceOption>
            ))}
            </S.PriceOptions>
        </S.Price>
        {/* <S.InputWrapper>
            <S.Label>칼로리</S.Label>
            <S.Input style={{marginLeft: 15}} placeholder="예상 칼로리" />
        </S.InputWrapper> */}
      </S.Info>
      
      <S.Title style={{fontSize: 24, marginTop: 20, paddingBottom: 5}}>재료</S.Title>
      <S.Ingredients>
        <S.IngredientInput placeholder="재료를 입력해주세요" />
        {/* <S.IngredientInput placeholder="예상 칼로리" /> */}
        <S.IngredientInput placeholder="개수를 입력해주세요" />
        <S.AddButton>추가하기</S.AddButton>
      </S.Ingredients>
      <S.Title style={{fontSize: 24, marginTop: 20, paddingBottom: 3}}>조리순서</S.Title>
      <S.CookingOrder>
        <S.Input
            style={{
                padding: '8px',
                width: '100%',
                backgroundImage: 'url("/images/attach.png")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 10px center',
                backgroundSize: '10px 10px'
            }}
            placeholder="자세한 조리 방법을 입력해주세요"
        />
        <S.AddButton style={{marginTop: 0}}>추가하기</S.AddButton>
      </S.CookingOrder>
      <S.SubmitButton style={{marginTop: 50}}>작성 완료</S.SubmitButton>
    </S.Wrapper>
  );
}
