import React, {useState} from 'react';
import NavBar from '../../components/navbarUnit/navbar';
import homeImg from "./home.png";
import profileImg from "./profile.png";
import writeImg from "./write.png";
import searchImg from "./search.png";
import profileimgImg from "./profileimg.png";
import { Link } from "react-router-dom";
import './home.css';


function HomePage() {

    const [cards, setCards] = useState([
        { id: 1, nickname: '닉네임1', recipeName: '요리 이름1', image: profileimgImg },
        { id: 2, nickname: '닉네임2', recipeName: '요리 이름2', image: profileimgImg },
        { id: 3, nickname: '닉네임3', recipeName: '요리 이름3', image: profileimgImg },
        { id: 4, nickname: '닉네임4', recipeName: '요리 이름4', image: profileimgImg },
        { id: 5, nickname: '닉네임5', recipeName: '요리 이름5', image: profileimgImg },
        { id: 6, nickname: '닉네임6', recipeName: '요리 이름6', image: profileimgImg },
        { id: 7, nickname: '닉네임7', recipeName: '요리 이름7', image: profileimgImg }
      ]);
    
      const rows = [];
      for (let i = 0; i < cards.length; i += 2) {
        rows.push(cards.slice(i, i + 2));
      }
    
      return (
        <div className="container2">
          <div className="title-box-home">
            <h1 className="ft-big">나의 취향저격 레시피🔫</h1>
          </div>
          <Link to={'/search'} className="search-link"><button className="search">
            <img src={searchImg} className="search-img" />
            <span className="search-box">레시피 검색하기</span>
          </button></Link>
          {/* <div className="container3">
            {rows.map((row, rowIndex) => (
              <div className="recipe-wrap" key={rowIndex}>
                {row.map(card => (
                  <Card 
                    key={card.id}
                    nickname={card.nickname} 
                    recipeName={card.recipeName} 
                    image={card.image} 
                  />
                ))}
              </div>
            ))}
          </div> */}
          <div className="container3">
      {cards.map(card => (
        <Card 
          key={card.id}
          nickname={card.nickname} 
          recipeName={card.recipeName} 
          image={card.image} 
        />
      ))}
    </div>
    
            <NavBar currentPage="home" />
        </div>
      );
    }
    
    function Card({ nickname, recipeName, image }) {
      return (
        <Link to={'#'} className="recipe-card">
          <div className="recipe">
            <div className="recipe-profile">
              <img src={image} className="profile-img" />
              <p className="ft-recipe">{nickname}</p>
            </div>
            <img src={image} className="recipe-img" />
            <div className="recipe-name">
              <p className="ft-recipe-small">{recipeName}</p>
            </div>
          </div>
        </Link>
      );
}

export default HomePage;