  import styled, { createGlobalStyle } from 'styled-components';

  export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR&display=swap');
  `;
  
  export const Container2 = styled.div`
    display: inline-block;
    width: 100vw;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
  
    &::-webkit-scrollbar {
      width: 5px;
    }
  
    &::-webkit-scrollbar-thumb {
      background-color: #D6D6D6;
      border-radius: 10px;
      max-height: 69px; 
      margin-right: 4px;
    }
  
    &::-webkit-scrollbar-track {
      background-color: white;
      margin-right: 4px; 
    }
  `;
  
  export const Container3 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 60px; 
    row-gap: 18px; 
  `;
  
  export const TitleBoxHome = styled.div`
    text-align: center;
    margin: 18px 0;
  `;
  
  export const FtBig = styled.div`
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 46.4px;
    margin: 0;
  `;
  
  export const Search = styled.div`
    background-color: white;
    width: 325px;
    height: 30px;
    margin: 0 auto;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none; 
  `;
  
  export const SearchImg = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 15px;
  `;
  
  export const SearchLink = styled.a`
    text-decoration: none;
  `;
  
  export const SearchBox = styled.div`
    width: 247px;
    font-size: 16px;
    text-align: left;
    color: #757575;  
    display: flex;     
    align-items: center;
  `;
  
  export const RecipeWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
  
    .invisible-card {
      visibility: hidden;
    }
  `;
  
  export const RecipeCard = styled.a`
    text-decoration: none;
    color: black;
  `;
  
  export const Recipe = styled.div`
    margin: 0;
    width: 150px;
    height: 220px;
    outline: 1px solid #FF640D;
    border-radius: 10px;
    text-decoration: none;
    color: black;
  `;
  
  export const RecipeProfile = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    vertical-align: middle;
    padding: 5px;
    padding-left: 10px;
  `;
  
  export const ProfileImg = styled.img`
    width: 21px;
    height: 21px;
    margin-right: 5px;
  `;
  
  export const RecipeImg = styled.img`
    width: 150px;
    height: 150px;
  `;
  
  export const RecipeName = styled.div`
    font-size: 10px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
  `;
  
  export const FtRecipe = styled.div`
    font-size: 12px;
  `;
  
  export const FtRecipeSmall = styled.div`
    padding: 5px;
    margin: 0;
  `;
  
  export const Nav = styled.nav`
    background-color: white;
    width: 100%; 
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
  
  export const NavDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  
  export const NavImg = styled.img`
    width: 20px;
    margin-top: 5px;
    margin-bottom: 2px; 
  `;
  
  export const NavP = styled.p`
    font-size: 10px;
    margin: 0; 
  `;
  
  export const NavLink = styled.a`
    text-decoration: none; 
    color: inherit; 
  `;
  