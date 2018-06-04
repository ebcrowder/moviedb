import React, { Fragment } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../img/logo.svg';

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto, 1fr);
`;

const Header = () => {
  return (
    <Fragment>
      <HeaderWrapper>
        <header className="App-header">
          <p>trailer mountain</p>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
      </HeaderWrapper>
    </Fragment>
  );
};

export default Header;
