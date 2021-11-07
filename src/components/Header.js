import React from 'react';
import styled from 'styled-components'
import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'

const HeaderWrapper = styled.header`
  max-width: 730px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
`

const Logo = styled.h1`
  font-size: 26px;

  a {
    color: inherit;
    text-decoration: none;
  }
`

const ModeButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  cursor:pointer;
  
  span {
    margin-top: 1px;
  }

  img {
    margin-left: 16px;
  }
`

function Header({themeToggler, currentTheme}) {
    return (
        <HeaderWrapper>
            <Logo><a href="#">
                devfinder
            </a>
            </Logo>
            <ModeButton onClick={() => themeToggler()}><span>{currentTheme === "light" ? "DARK" : "LIGHT"}</span><img
                src={currentTheme === "light" ? moon : sun}
                alt={`Switch to ${currentTheme === "light" ? "dark mode" : "light mode"}`}/>
            </ModeButton>
        </HeaderWrapper>
    );
}

export default Header;