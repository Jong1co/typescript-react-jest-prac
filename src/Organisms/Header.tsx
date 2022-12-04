import { useEffect, useState } from "react";
import styled from "styled-components";
import { getProducts, login, logout, onUserStateChange } from "../api/firebase";
import Logo from "../Atoms/Logo";
import LoginButton from "../Atoms/LoginButton";
import SVGButton from "../Atoms/SVGButton";

const Header = () => {
  // 왜 안 됨?
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  const handleLogin = () => {
    login().then(setUser);
  };

  const handleLogout = () => {
    logout().then(setUser);
  };

  return (
    <HeaderBar>
      <Logo />
      <div className='header__right'>
        <span>Products</span>
        <SVGButton param='my-cart' />

        {user?.isAdmin && <SVGButton param='add-product' />}
        {user === null ? (
          <LoginButton loginHandler={handleLogin} text='Login' />
        ) : (
          <>
            <img src={user.photoURL} alt='profile' className='profile' />
            <LoginButton loginHandler={handleLogout} text='Logout' />
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

  .header__right {
    display: flex;
    align-items: center;
  }

  .header__right > * {
    margin-left: 16px;
  }

  .profile {
    width: 24px;
    border-radius: 50%;
  }
`;
