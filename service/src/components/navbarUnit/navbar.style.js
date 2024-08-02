import styled from '@emotion/styled';

export const Nav = styled.div`
    --border-color: #FFE1D1;
    --focused-color: #ff640d;
    --text-size: 10px;
    --write-text-size: 7.5px;
    
    background-color: white;
    width: 100vw; /* Viewport width */
    height: 51px;
    display: flex;
    border-top: 0.5px solid var(--border-color);
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 0 100px;  
`;

export const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none; /* Remove default underline */
`;

export const NavImage = styled.img`
    width: 20px;
    margin-bottom: 2px;
`;

export const NavText = styled.p`
    width: 30px;
    margin: 0;
    text-align: center;
    font-size: var(--text-size);
    color: ${props => props.active ? 'var(--focused-color)' : 'black'};
    
    &:hover {
        color: ${props => props.active ? 'var(--focused-color)' : 'gray'};
    }
    
    &.search_result_write {
        font-size: var(--write-text-size);
    }
`;
