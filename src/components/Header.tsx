import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { login, logout, onUserStateChange } from "../api/firebase";
import { User } from "@firebase/auth";

const Header = () => {
  // 왜 안 됨?
  // const [user, setUser] = useState<User | null | void>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const handleLogin = () => {
    login().then(setUser);
  };

  const handleLogout = () => {
    logout().then(setUser);
  };

  return (
    <HeaderBar>
      <div className='header__left'>
        <svg
          stroke='currentColor'
          fill='#fa6161'
          strokeWidth='0'
          viewBox='0 0 1024 1024'
          height='2em'
          width='2em'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z'></path>
        </svg>
        <div className='title'>Shopping Mall</div>
      </div>
      <div className='header__right'>
        <span>Products</span>
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 1024 1024'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z'></path>
        </svg>
        {user?.isAdmin && <button>hi</button>}
        {user === null ? (
          <button className='login__button' onClick={handleLogin}>
            Login
          </button>
        ) : (
          <>
            <img src={user.photoURL} alt='profile' className='profile' />
            <button className='logout__button' onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.header`
  padding: 12px;
  display: flex;
  justify-content: space-between;

  .header__left {
    display: flex;
    align-items: center;
  }

  .header__right {
    display: flex;
    align-items: center;
  }

  .header__right > * {
    margin-left: 16px;
  }

  .title {
    color: #fa6161;
    margin-left: 8px;
    font-size: 24px;
  }

  .profile {
    width: 24px;
    border-radius: 50%;
  }
`;
