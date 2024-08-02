import React from 'react';
import { Link } from 'react-router-dom';
import './mypage.css';
import profileIcon from './img/profile.png';
import editIcon from './img/edit.png';
import tofuRecipeImage from './img/tofuImage.png';
import eggFriedRiceImage from './img/eggFriedRiceImage.png';
import homeIconOff from './img/navHome_off.png';
import myIconOn from './img/navMy_on.png';
import writeIconOff from './img/navWrite_off.png';
import NavBar from '../../components/navbarUnit/navbar';

const MyPage = () => {
const userName = "마피"; // 여기에 사용자 이름을 동적으로 설정할 수 있습니다

return (
    <div className="my-page">
    <header id="mypage_header">
        <img id="my_profile" src={profileIcon} alt="Profile" />
        <p id="my_id">{userName}님</p>
        <img id="my_edit" src={editIcon} alt="Edit" />
    </header>

    <p className="category">나의 요리 경력</p>
    <div className="mypage_container">
        <div className="mypage_box">
        <div className="mypage_profile">
            <img src={profileIcon} alt="Profile" />
            <span>{userName}님</span>
        </div>
        <div className="mypage_image">
            <img src={tofuRecipeImage} alt="두부조림 황금레시피" />
        </div>
        <div className="mypage_title">두부조림 황금레시피</div>
        </div>

        <div className="mypage_box">
        <div className="mypage_profile">
            <img src={profileIcon} alt="Profile" />
            <span>{userName}님</span>
        </div>
        <div className="mypage_image">
            <img src={eggFriedRiceImage} alt="계란볶음밥" />
        </div>
        <div className="mypage_title">계란볶음밥</div>
        </div>

        <div className="mypage_box">
        <div className="mypage_profile">
            <img src={profileIcon} alt="Profile" />
            <span>{userName}님</span>
        </div>
        <div className="mypage_image">
            <img src={eggFriedRiceImage} alt="계란볶음밥" />
        </div>
        <div className="mypage_title">계란볶음밥</div>
        </div>
    </div>

    <p className="category">나의 pick</p>
    <section className="mypage_container">
        <div className="mypage_box">
        <div className="mypage_profile">
            <img src={profileIcon} alt="Profile" />
            <span>9단주부맘</span>
        </div>
        <div className="mypage_image">
            <img src={tofuRecipeImage} alt="두부조림 황금레시피" />
        </div>
        <div className="mypage_title">두부조림 황금레시피</div>
        </div>

        <div className="mypage_box">
        <div className="mypage_profile">
            <img src={profileIcon} alt="Profile" />
            <span>초보주부</span>
        </div>
        <div className="mypage_image">
            <img src={eggFriedRiceImage} alt="계란볶음밥" />
        </div>
        <div className="mypage_title">계란볶음밥</div>
        </div>

        <div className="mypage_box">
        <div className="mypage_profile">
            <img src={profileIcon} alt="Profile" />
            <span>초보주부</span>
        </div>
        <div className="mypage_image">
            <img src={eggFriedRiceImage} alt="계란볶음밥" />
        </div>
        <div className="mypage_title">계란볶음밥</div>
        </div>
    </section>


    {/* <nav>
                <Link to="/home">
                    <img src={homeIconOff} alt="홈" />
                    <p>홈</p>
                </Link>
                <Link to="/my">
                    <img src={myIconOn} alt="MY" />
                    <p id="focused">MY</p>
                </Link>
                <Link to="/writing">
                    <img src={writeIconOff} alt="글쓰기" />
                    <p id="search_result_write">글쓰기</p>
                </Link>
            </nav> */}

    <NavBar currentPage="my" />
    </div>
);
};

  export default MyPage;