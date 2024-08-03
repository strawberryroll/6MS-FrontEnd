// writing.js
import * as S from "./writing.style";
import NavBar from '../../components/navbarUnit/navbar';
import { data } from "../../send_data";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function WritingPage() {
  const [title, setTitle] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const [menuName, setMenuName] = useState(""); // New state for menu name
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [serving, setServing] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
  const [cookingOrder, setCookingOrder] = useState([{ step: "", image: "" }]); // Array to store multiple steps
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    data.writing.title = event.target.value; // Store the value in data object
  };

  const handleSelfIntroductionChange = (event) => {
    setSelfIntroduction(event.target.value);
    data.writing.intro = event.target.value; // Store the value in data object
  };

  const handleMenuNameChange = (event) => {
    setMenuName(event.target.value);
    data.writing.menu = event.target.value; // Store the value in data object
  };

  const handleDifficultyClick = (level) => {
    setSelectedDifficulty(level);
    data.writing.level = level; // Store the value in data object
  };

  const handleServingChange = (event) => {
    setServing(event.target.value);
    data.writing.servings = event.target.value; // Store the value in data object
  };

  const handlePriceClick = (price) => {
    setSelectedPrice(price);
    data.writing.cost = price; // Store the value in data object
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);

    // Update the data object
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

    // Update the data object
    data.writing.content = newCookingOrder.map(order => order.step);
  };

  const handleAddCookingOrder = () => {
    setCookingOrder([...cookingOrder, { step: "", image: "" }]);
  };

  const handleImage = (e) => {
    // console.log(e.target.files);
    setImage(e.target.files[0]);
    data.writing.recipeImages = e.target.files[0];
  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    fetch(`http://13.124.20.140:8080/board/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data.writing)
    })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      navigate('/success', { state: { result } }); // Navigate to the success page with the result data
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <S.Wrapper>
      <S.CloseBox>
        <Link to='/home'><S.Icon src="/images/close.png" style={{ marginRight: "auto" }} /></Link>
      </S.CloseBox>

      <S.Form onSubmit={onSubmitHandler}>
        <S.Title style={{ padding: "5px", fontSize: "32px" }}>user님의 레시피를</S.Title>
        <S.Title style={{ padding: 0, fontSize: "32px", marginBottom: "25px" }}> 소개해주세요! </S.Title>
        <S.TitleInput placeholder="제목을 작성해주세요" value={title} onChange={handleTitleChange} />
        <S.ImageUpload>
          <S.Icon src="/images/blackphoto.png" />
          <S.Input 
            type="file" 
            name='file'
            onChange={handleImage} 
            style={{margin: 0, border: "none"}} 
          />
        </S.ImageUpload>
        <S.Title style={{ fontSize: "10px", color: "#FF640D", margin: 0, padding: 0 }}>▲ 완성본 사진을 첨부해주세요</S.Title>

        <S.UserBox>
          <S.Icon src="/images/user.png" />
          <span>user</span>
        </S.UserBox>
        <S.TextArea placeholder="자기소개 한 마디를 작성해주세요" value={selfIntroduction} onChange={handleSelfIntroductionChange}></S.TextArea>

        <S.Info>
          <S.InputWrapper>
            <S.Label>메뉴이름</S.Label>
            <S.Input
              placeholder="메뉴의 이름을 입력해주세요"
              value={menuName}
              onChange={handleMenuNameChange}
            />
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
            <S.Input placeholder="기준인분을 입력해주세요" value={serving} onChange={handleServingChange} />
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
      <NavBar currentPage="writing" />
    </S.Wrapper>
  );
}
