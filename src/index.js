import React from 'react';
import ReactDOM from 'react-dom';
import './assets/tailwind.css';
import './assets/styles.css';
import { createGlobalStyle } from 'styled-components';
import { AppContainer, StyledForm } from './styles/index';
import * as serviceWorker from './serviceWorker';

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
`;

const Index = () => (
  <>
    <GlobalStyle />
    <React.StrictMode>
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
    </React.StrictMode>
  </>
);

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
