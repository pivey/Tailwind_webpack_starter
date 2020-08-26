import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { AppContainer, StyledForm } from './styles';

const GlobalStyle = createGlobalStyle`
html, body {
  min-height: 100%;
  margin: 0px;
  padding: 0px;
  color: black;
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <StyledForm>
          <form>
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button type="button">Sign In</button>
          </form>
        </StyledForm>
      </AppContainer>
    </>
  );
}

export default App;
