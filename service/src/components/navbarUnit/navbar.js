import styled from '@emotion/styled';
import * as S from "./navbar.style";
import { Link } from 'react-router-dom';
import homeIconOn from './images/navHomeOn.png';
import homeIconOff from './images/navHomeOff.png';
import myIconOn from './images/navMyOn.png';
import myIconOff from './images/navMyOff.png';
import writeIconOff from './images/navWriteOff.png';
import writeIconOn from './images/navWriteOn.png';

const Navbar = ({ currentPage }) => {
    return (
        <S.Nav>
            <S.NavItem as={Link} to="/home">
                <S.NavImage 
                    src={currentPage === 'home' ? homeIconOn : homeIconOff} 
                    alt="Home icon" 
                />
                <S.NavText active={currentPage === 'home'}>홈</S.NavText>
            </S.NavItem>
            <S.NavItem as={Link} to="/my">
                <S.NavImage 
                    src={currentPage === 'my' ? myIconOn : myIconOff} 
                    alt="My page icon" 
                />
                <S.NavText>MY</S.NavText>
            </S.NavItem>
            <S.NavItem as={Link} to="/writing">
                <S.NavImage 
                    src={currentPage === 'writing' ? writeIconOn : writeIconOff} 
                    alt="Write post icon" 
                />
                <S.NavText active={currentPage === 'writing'}>글쓰기</S.NavText>
            </S.NavItem>
        </S.Nav>
    );
};

export default Navbar;
