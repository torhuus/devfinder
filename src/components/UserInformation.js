import React from 'react';
import styled from 'styled-components'
import {ReactComponent as CompanyIcon} from '../assets/icon-company.svg';
import {ReactComponent as TwitterIcon} from '../assets/icon-twitter.svg';
import {ReactComponent as LinkIcon} from '../assets/icon-website.svg';
import {ReactComponent as LocationIcon} from '../assets/icon-location.svg'
import dayjs from 'dayjs'

const UserInformationWrapper = styled.section`
  max-width: 730px;
  width: 100%;
  margin-bottom: 37px;
  background: ${({theme}) => theme.componentBg};
  padding: 48px;
  border-radius: 15px;
  box-shadow: ${({theme}) => theme.boxShadow};
  display: grid;
  grid-template-areas:
    "avatar intro intro "
    "avatar description description"
    "avatar stats stats "
    "avatar links links ";
  column-gap: 37px;

  @media screen and (max-width: 800px) {
    grid-template-areas:
    "avatar intro intro "
    "description description description"
    "stats stats stats "
    "links links links ";
    grid-template-columns: 70px auto;
  }

  @media screen and (max-width: 800px) {
    padding: 40px;
  }

  @media screen and (max-width: 800px) {
    padding: 32px 24px;
  }
`
const UserAvatar = styled.div`
  grid-area: avatar;
  width: 117px;

  img {
    width: 100%;
    border-radius: 50%;
  }
  
  @media screen and (max-width: 800px){
    width: 70px;
  }
`
const UserInfo = styled.div`
  grid-area: intro;

  .mainInfo {
    display: grid;
    grid-template-areas: "name joined" "username username";
    align-items: center;
    justify-content: space-between;

    h2 {
      grid-area: name;
      margin-bottom: 3px;
      font-size: 26px;
    }

    a {
      grid-area: username;
      margin-bottom: 21px;
      color: ${({theme}) => theme.primary};
      text-decoration: none;
      font-size: 16px;
      &:hover {
        text-decoration: underline;
      }
    }

    p {
      grid-area: joined;
      font-size: 15px;
    }
  }

  @media screen and (max-width: 800px) {
    .mainInfo {
      grid-template-areas: "name" "username" "joined";
      
      h2 {
        font-size: 16px;
      }
      
      p {
        font-size: 13px;
      }
      
      a {
        margin-bottom: 5px;
        font-size: 13px;
      }
    }
  }
`
const UserDescription = styled.div`
  grid-area: description;
  font-size: 15px;

  @media screen and (max-width: 800px) {
    margin-top: 30px;
    font-size: 13px;
  }
`;
const UserStats = styled.div`
  grid-area: stats;
  background: ${({theme}) => theme.bodyBg};
  padding: 14px 32px 18px 32px;
  border-radius: 10px;
  margin: 35px 0 36px 0;
  display: flex;
  justify-content: space-around;
  text-align: center;

  .stat {
    p {
      font-size: 13px;
    }

    h3 {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 18px 15px;
    margin: 28px 0 23px 0;

    .stat {
      p {
        font-size: 11px;
      }

      h3 {
        font-size: 16px;
      }
    }
  }
`
const UserLinks = styled.div`
  grid-area: links;
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  font-size: 15px;


  .link {
    display: grid;
    grid-template-columns: 36px auto;
    align-items: center;
    
    a {
      text-decoration: none;
      color:inherit;
      &:hover {
        text-decoration: underline;
      }
    }

    svg {
      color: #000;
      margin-right: 16px;
    }
  }
  .notAvailable {
    opacity: 50%;

  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

function UserInformation({user}) {
    return (
        <UserInformationWrapper>
            <UserAvatar className="image">
                <img src={user.avatar_url} alt={user.name}/>
            </UserAvatar>
            <UserInfo>
                <div className="mainInfo">
                    <h2>{user.name !== null ? user.name : "Not available"}</h2>
                    <a href={user.html_url}>@{user.login}</a>
                    <p>Joined {dayjs(user.created_at).format('D MMM YYYY')}</p>
                </div>
            </UserInfo>
            <UserDescription>{user.bio}</UserDescription>
            <UserStats>
                <div className="stat">
                    <p>Repos</p>
                    <h3>{user.public_repos}</h3>
                </div>
                <div className="stat">
                    <p>Followers</p>
                    <h3>{user.followers}</h3>
                </div>
                <div className="stat">
                    <p>Following</p>
                    <h3>{user.following}</h3>
                </div>
            </UserStats>
            <UserLinks>
                <div className={`link ${user.location !== null ? "" : "notAvailable"}`}><LocationIcon/>{user.location !== null ? user.location : "Not available"}</div>
                <div className={`link ${user.twitter_username !== null ? "" : "notAvailable"}`}><TwitterIcon/>{user.twitter_username !== null ? user.twitter_username : "Not available"}</div>
            <div className={`link ${user.blog !== "" ? "" : "notAvailable"}`}><LinkIcon/><a href={user.blog}>{user.blog !== "" ? user.blog : "Not available"}</a></div>
            <div className={`link ${user.company !== null ? "" : "notAvailable"}`}><CompanyIcon/>{user.company !== null ? user.company : "Not available"}</div>
            </UserLinks>
        </UserInformationWrapper>
    );
}

export default UserInformation;
