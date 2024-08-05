import * as React from 'react';
import * as S from "./writing.style";
import NavBar from '../../components/navbarUnit/navbar';
import { data } from "../../send_data";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { response_data } from '../../response_data';

export default function WritingPage() {
  const [title, setTitle] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const [menuName, setMenuName] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [serving, setServing] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
  const [cookingOrder, setCookingOrder] = useState([{ step: "", image: "" }]);
  // const [image, setImage] = useState('');
  const [category, setCategory] = useState("일상"); 
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const [url, setUrl] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    data.writing.title = event.target.value;
  };

  const handleSelfIntroductionChange = (event) => {
    setSelfIntroduction(event.target.value);
    data.writing.intro = event.target.value;
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
    data.writing.url = event.target.value;
  };

  const handleMenuNameChange = (event) => {
    setMenuName(event.target.value);
    data.writing.menu = event.target.value;
  };

  const handleDifficultyClick = (level) => {
    setSelectedDifficulty(level);
    data.writing.level = level;
  };

  const handleServingChange = (event) => {
    setServing(event.target.value);
    data.writing.servings = event.target.value;
  };

  const handlePriceClick = (price) => {
    setSelectedPrice(price);
    data.writing.cost = price;
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);

    data.writing.ingredient = newIngredients.reduce((acc, ingredient) => {
      if (ingredient.name && ingredient.quantity) {
        acc.push([ingredient.name, ingredient.quantity]);
      }
      return acc;
    }, []);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const handleCookingOrderChange = (index, value) => {
    const newCookingOrder = [...cookingOrder];
    newCookingOrder[index].step = value;
    setCookingOrder(newCookingOrder);

    data.writing.content = newCookingOrder.map(order => order.step);
  };

  const handleAddCookingOrder = () => {
    setCookingOrder([...cookingOrder, { step: "", image: "" }]);
  };

  // const handleImage = (e) => {
  //   setImage(e.target.files[0]);
  //   data.writing.recipeImages = e.target.files[0];
  // };

  const handleCategoryClick = () => {
    setShowCategoryOptions(!showCategoryOptions);
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    data.writing.category = selectedCategory;
    setShowCategoryOptions(false);
  };

  const logDataToConsole = () => {
    console.log(data);
    console.log(data.writing);
    console.log(JSON.stringify(data.writing));
  };

  const validateForm = () => {
    if (!title) {
      setPopupMessage("제목을 작성해주세요.");
      return false;
    }
    if (!selfIntroduction) {
      setPopupMessage("자기소개 한 마디를 작성해주세요.");
      return false;
    }
    if (!menuName) {
      setPopupMessage("메뉴의 이름을 입력해주세요.");
      return false;
    }
    if (!selectedDifficulty) {
      setPopupMessage("난이도를 선택해주세요.");
      return false;
    }
    if (!serving) {
      setPopupMessage("기준인분을 입력해주세요.");
      return false;
    }
    if (!selectedPrice) {
      setPopupMessage("가격을 선택해주세요.");
      return false;
    }
    if (ingredients.some(ingredient => !ingredient.name || !ingredient.quantity)) {
      setPopupMessage("재료와 개수를 모두 입력해주세요.");
      return false;
    }
    if (cookingOrder.some(order => !order.step)) {
      setPopupMessage("조리순서를 모두 입력해주세요.");
      return false;
    }
    // if (!image) {
    //   setPopupMessage("완성본 사진을 첨부해주세요.");
    //   return false;
    // }
    return true;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      fetch(`/board/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.writing),
        // credentials: 'include'
      })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        navigate('/success', { state: { result } });
      })
      .catch(error => {
        console.error('Error:', error);
      });
    } else {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <S.Wrapper>
      <S.CloseBox>
        <Link to='/home'><S.Icon src="/images/close.png" style={{ marginRight: "auto" }} /></Link>
      </S.CloseBox>

      <S.Form onSubmit={onSubmitHandler}>
        <S.Title style={{ padding: "5px", fontSize: "32px" }}>{response_data.user.nickname}님의 레시피를</S.Title>
        <S.Title style={{ padding: 0, fontSize: "32px", marginBottom: "25px" }}> 소개해주세요! </S.Title>
        <S.TitleInput placeholder="제목을 작성해주세요" value={title} onChange={handleTitleChange} />
        <S.ImageUpload>
          <S.Icon src="/images/blackphoto.png" />
          <S.Input 
            type="file" 
            name='file'
            // onChange={handleImage} 
            style={{margin: 0, border: "none"}} 
          />
        </S.ImageUpload>
        <S.Title style={{ fontSize: "10px", color: "#FF640D", margin: 0, padding: 0 }}>▲ 완성본 사진을 첨부해주세요</S.Title>

        <S.UserBox>
          <S.Icon src="/images/user.png" />
          <span>{response_data.user.nickname}</span>
        </S.UserBox>
        <S.TextArea placeholder="자기소개 한 마디를 작성해주세요" value={selfIntroduction} onChange={handleSelfIntroductionChange}></S.TextArea>
        <S.TextArea placeholder="URL 추가" value={url} onChange={handleUrlChange}></S.TextArea>

        <S.Info>
          <S.InputWrapper>
            <S.Label>메뉴이름</S.Label>
            <S.Input
              placeholder="메뉴의 이름을 입력해주세요"
              value={menuName}
              onChange={handleMenuNameChange}
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Label style={{width: 60}}>카테고리</S.Label>
            <S.RadioWrapper>
            <S.RadioInput 
              onClick={handleCategoryClick}
              placeholder="카테고리를 선택해주세요"
              value={category}
              readOnly
              style = {{
                backgroundImage: 'url("/images/arrowDown.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 10px center",
              backgroundSize: "10px 5px"
              }}
            />
            {showCategoryOptions && (
              <S.CategoryOptions>
                {["일상", "초스피드", "해장", "안주", "다이어트", "간식",
                "야식", "글로벌", "기념일", "집들이"
                ].map((option) => (
                  <S.CategoryOption key={option}>
                    <S.RadioButton
                      type="radio"
                      name="category"
                      value={option}
                      checked={category === option}
                      onChange={() => handleCategorySelect(option)}
                    />
                    {option}
                  </S.CategoryOption>
                ))}
              </S.CategoryOptions>
            )}
            </S.RadioWrapper>
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
            <S.Input type="number" placeholder="기준인분을 입력해주세요" value={serving} onChange={handleServingChange} />
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
        </S.Info>

        <S.Title style={{ fontSize: 24, marginTop: 20, paddingBottom: 5 }}>재료</S.Title>
        {ingredients.map((ingredient, index) => (
          <S.Ingredients key={index}>
            <S.IngredientInput
              placeholder="재료를 입력해주세요"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
            />
            <S.IngredientInput
              type="number" 
              placeholder="개수를 입력해주세요"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
            />
          </S.Ingredients>
        ))}
        <S.AddButton type="button" onClick={handleAddIngredient}>추가하기</S.AddButton>

        <S.Title style={{ fontSize: 24, marginTop: 20, paddingBottom: 3 }}>조리순서</S.Title>
        {cookingOrder.map((order, index) => (
          <S.CookingOrder key={index}>
            <S.Input
              style={{
                padding: "8px",
                width: "100%",
                backgroundImage: 'url("/images/attach.png")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
                backgroundSize: "10px 10px",
              }}
              placeholder="자세한 조리 방법을 입력해주세요"
              value={order.step}
              onChange={(e) => handleCookingOrderChange(index, e.target.value)}
            />
          </S.CookingOrder>
        ))}
        <S.AddButton type="button" onClick={handleAddCookingOrder}>추가하기</S.AddButton>

        <S.SubmitButton style={{ marginTop: 50 }} type="submit">작성 완료</S.SubmitButton>
      </S.Form>
      {showPopup && (
        <S.Popup>
          <S.PopupContent>
            <S.PopupMessage>{popupMessage}</S.PopupMessage>
            <S.PopupCloseButton onClick={closePopup}>닫기</S.PopupCloseButton>
          </S.PopupContent>
        </S.Popup>
      )}
      <S.LogButton onClick={logDataToConsole}>콘솔에 데이터 확인</S.LogButton>
      <NavBar currentPage="writing" />
    </S.Wrapper>
  );
}
