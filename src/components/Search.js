import React from 'react';
import styled from 'styled-components'
import searchIcon from '../assets/icon-search.svg'

const SearchWrapper = styled.section`
  background: ${({theme}) => theme.componentBg};
  width: 100%;
  max-width: 730px;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  box-shadow: ${({theme})=> theme.boxShadow};


  @media screen and (max-width: 800px){
    margin-bottom: 16px;
    flex-direction: column;
  }
`

const SearchFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 32px;
  position: relative;

  @media screen and (max-width: 800px){
    font-size: 14px;
    margin-left: 16px;
  }
`

const SearchField = styled.input`
  background: none;
  border: none;
  width: 100%;
  margin-left: 24px;
  font-size: 18px;

  @media screen and (max-width: 800px){
    font-size: 13px;
    margin-left:9px;
  }
`

const SearchButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  background: ${({theme}) => theme.primary};
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  transition: background .3s ease-in-out;

  &:hover {
    background: #60ABFF;
  }
  
  @media screen and (max-width: 800px){
    font-size: 14px;
    width: 100%;
    margin-top: 18px;
  }
`

const ErrorMessage = styled.span`
  position: absolute;
  right: 24px;
  color: #F74646;
  font-size: 15px;
  font-weight:bold;

  @media screen and (max-width: 800px){
    display:none;
  }
`;


function Search() {
    return (
        <SearchWrapper>
            <SearchFieldWrapper>
                <img src={searchIcon} alt="Search icon"/>
                <SearchField type="text" id="search" placeholder="Search GitHub username..."/>
                <ErrorMessage>No results</ErrorMessage>
            </SearchFieldWrapper>
            <SearchButton onClick={() => console.log("Searching...")}>Search</SearchButton>
        </SearchWrapper>
    );
}

export default Search;
